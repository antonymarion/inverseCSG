#!/usr/bin/env python

import itertools
import math
import sys

import numpy as np
from numpy import linalg as LA
from scipy.spatial.transform import Rotation as R

expressionToStringID = {}
geometryEditorObjectScript = {}
primitives = set()

DIST_THRESH = 1e-5
sqrt_radius = True
globalIdx = 0


class FrozenSetUnion(frozenset):
	def __str__(self):
		ret_string = []
		ret_string.append('Union(')
		for e in self:
			ret_string.append(str(e))
			ret_string.append(',')
		ret_string = ret_string[:-1]
		ret_string.append(')')

		return ''.join(ret_string)


class FrozenSetIntersection(frozenset):
	def __str__(self):
		ret_string = []
		ret_string.append('Intersection(')
		for e in self:
			ret_string.append(str(e))
			ret_string.append(',')
		ret_string = ret_string[:-1]
		ret_string.append(')')

		return ''.join(ret_string)


def frozenVersion(e):
	if isinstance(e, SetUnion):
		return FrozenSetUnion(e)
	if isinstance(e, SetIntersection):

		return FrozenSetIntersection(e)


	else:
		return e


def unfrozenVersion(e):
	if isinstance(e, FrozenSetUnion):
		return SetUnion(e)
	if isinstance(e, FrozenSetIntersection):
		return SetIntersection(e)



	else:
		return e


class SetUnion(set):

	def __init__(self, expr=None):
		set.__init__(self)
		if expr is not None:
			for e in expr:
				if isinstance(e, SetUnion) or isinstance(e, FrozenSetUnion):
					self.update(frozenVersion(e))
				else:
					self.add(frozenVersion(e))

	def __str__(self):
		ret_string = []
		ret_string.append('Union(')
		for e in self:
			ret_string.append(str(e))
			ret_string.append(',')
		ret_string = ret_string[:-1]
		ret_string.append(')')

		return ''.join(ret_string)


class SetIntersection(set):

	def __init__(self, expr=None):
		set.__init__(self)
		if expr is not None:
			for e in expr:
				if isinstance(e, SetIntersection) or isinstance(e, FrozenSetIntersection):
					self.update(frozenVersion(e))
				else:
					self.add(frozenVersion(e))

	def __str__(self):
		ret_string = []
		ret_string.append('Intersection(')
		for e in self:
			ret_string.append(str(e))
			ret_string.append(',')
		ret_string = ret_string[:-1]
		ret_string.append(')')

		return ''.join(ret_string)


class SetSubtract(tuple):
	def __new__(self, x, y=None):
		if y == None:
			lst = x  # rename for clarity
			if len(lst) != 2:
				raise Exception('Lists must have length 2 for subtraction')
			return tuple.__new__(SetSubtract, (frozenVersion(lst[0]), frozenVersion(lst[1])))

		else:
			return tuple.__new__(SetSubtract, (frozenVersion(x), frozenVersion(y)))

	def __str__(self):
		ret_string = []
		ret_string.append('Subtract(')
		for e in self:
			ret_string.append(str(e))
			ret_string.append(',')
		ret_string = ret_string[:-1]
		ret_string.append(')')

		return ''.join(ret_string)


def simplify(obj0, obj1, operatorType):
	# Some laws taken from: http://www.cs.odu.edu/~cs381/cs381content/set/set_op_prop.html

	# unfreeze first so we can mutate
	obj0 = frozenVersion(obj0)
	obj1 = frozenVersion(obj1)
	if isinstance(operatorType, SetUnion) or isinstance(operatorType, FrozenSetUnion):

		# Distributive laws:

		if (isinstance(obj0, FrozenSetIntersection)) and \
				(isinstance(obj1, FrozenSetIntersection)):

			intersection = frozenVersion(obj0.intersection(obj1))
			union_difference = frozenVersion(obj0.union(obj1).difference(intersection))
			if len(intersection) == 0 or len(union_difference) == 0:
				return (FrozenSetUnion([obj0, obj1]), False)
			else:
				return (FrozenSetIntersection([intersection, FrozenSetUnion(union_difference)]), True)

		if isinstance(obj0, FrozenSetIntersection) and \
				isinstance(obj1, Primitive):
			if obj1 in obj0:
				return (obj1, True)

		if isinstance(obj1, FrozenSetIntersection) and \
				isinstance(obj0, Primitive):
			if obj0 in obj1:
				return (obj0, True)

		# Law 9
		# First, either the first object must be a subtraction, and the second object a set, frozenset, or a primitive

		if isinstance(obj0, SetSubtract) and \
				((isinstance(obj1, Primitive) and obj0[1] == obj1) or \
				 (isinstance(obj1, FrozenSetUnion) and obj0[1] in obj1)):
			return (FrozenSetUnion([obj1, obj0[0]]), True)
		if isinstance(obj1, SetSubtract) and \
				((isinstance(obj0, Primitive) and obj1[1] == obj0) or \
				 (isinstance(obj0, FrozenSetUnion) and obj1[1] in obj0)):
			return (FrozenSetUnion([obj0, obj1[0]]), True)

		# Law 11
		if isinstance(obj0, SetSubtract) and isinstance(obj1, SetSubtract) and \
				obj0[0] == obj1[0]:
			return (SetSubtract(obj0[0], FrozenSetIntersection([obj0[1], obj1[1]])), True)

		if isinstance(obj0, SetSubtract) and isinstance(obj1, SetSubtract) and \
				obj0[1] == obj1[1]:
			return (SetSubtract(FrozenSetUnion([obj0[0], obj1[0]]), obj0[1]), True)

		'''
		if  isinstance(obj0, SetSubtract) and isinstance(obj1, SetSubtract) and \
			obj1[0] == obj0[1]:
			return (SetSubtract(FrozenSetUnion(obj0[0], obj0[1]), obj1[1]), True)
			
		if  isinstance(obj0, SetSubtract) and isinstance(obj1, SetSubtract) and \
			obj0[0] == obj1[1]:
			return (SetSubtract(FrozenSetUnion(obj1[0], obj1[1]), obj0[1]), True)
		'''

		if isinstance(obj0, FrozenSetIntersection) and isinstance(obj1, SetSubtract) and \
				obj1[0] in obj0:
			first_term = obj1[0]
			second_term = obj1[1]
			third_term = obj0.difference([first_term])

			return (SetSubtract(first_term, SetSubtract(second_term, third_term)), True)

		if isinstance(obj1, FrozenSetIntersection) and isinstance(obj0, SetSubtract) and \
				obj0[0] in obj1:
			first_term = obj0[0]
			second_term = obj0[1]
			third_term = obj1.difference([first_term])

			return (SetSubtract(first_term, SetSubtract(second_term, third_term)), True)

		# Default case
		return (FrozenSetUnion([obj0, obj1]), False)

	elif isinstance(operatorType, SetIntersection) or isinstance(operatorType, FrozenSetIntersection):

		# Distributive laws:

		if (isinstance(obj0, FrozenSetUnion)) and \
				(isinstance(obj1, FrozenSetUnion)):

			intersection = frozenVersion(obj0.intersection(obj1))

			union_difference = frozenVersion(obj0.union(obj1).difference(intersection))
			if len(intersection) == 0 or len(union_difference) == 0:
				return (FrozenSetIntersection([obj0, obj1]), False)
			else:
				# IPython.embed()
				return (FrozenSetUnion([intersection, FrozenSetIntersection(union_difference)]), True)

		if isinstance(obj0, FrozenSetUnion) and \
				isinstance(obj1, Primitive):
			if obj1 in obj0:
				return (obj1, True)

		if isinstance(obj1, FrozenSetUnion) and \
				isinstance(obj0, Primitive):
			if obj0 in obj1:
				return (obj0, True)

		# Law 10
		"""
		if  isinstance(obj0, SetSubtract) and \
			((isinstance(obj1, Primitive) and obj0[1] == obj1) or \
			(isinstance(obj1, frozenset)) and obj0[1] in obj1)):
			if isinstance(obj1, Primitive):
				return (None, True)
			else:
				obj1.remove(obj0[1])
			return FrozenSetUnion(obj1)
		if  isinstance(obj1, SetSubtract) and \
			((isinstance(obj0, Primitive) and obj1[1] == obj0) or \
			(isinstance(obj0, frozenset)) and obj1[1] in obj0)):
			if isinstance(obj0, Primitive):
				return (None, True)
			else:
				obj0.remove(obj1[1])
			return (FrozenSetUnion(obj0), True)
		"""
		# TODO: THis is a simplified version, since the more complex version is a bit tricky
		if isinstance(obj0, SetSubtract) and \
				(isinstance(obj1, Primitive) and obj0[1] == obj1):
			return (None, True)
		if isinstance(obj1, SetSubtract) and \
				(isinstance(obj0, Primitive) and obj1[1] == obj0):
			return (None, True)

		if isinstance(obj0, SetSubtract) and \
				(isinstance(obj1, Primitive) and obj0[0] == obj1):
			return (obj0, True)
		if isinstance(obj1, SetSubtract) and \
				(isinstance(obj0, Primitive) and obj1[0] == obj0):
			return (obj1, True)

		# Law 11

		if isinstance(obj0, SetSubtract) and isinstance(obj1, SetSubtract) and \
				obj0[0] == obj1[0]:
			return (SetSubtract(obj0[0], FrozenSetUnion([obj0[1], obj1[1]])), True)

		# Default case
		return (FrozenSetIntersection([obj0, obj1]), False)



	elif isinstance(operatorType, SetSubtract):
		raise Exception('This should never happen - cannot process set subtraction')
		"""
		if obj0 == obj1:
			return FrozenSetUnion([]) #Nullset
		
	
		#Default case
		return SetSubtract(obj0, obj1)
		"""

	else:
		raise Exception('Invalid simplification type ', operatorType)


def recurseAndSimplify(setObject):
	# TODO: Make this a class method of one of the above classes, maybe giving them a common superclass somehow?

	# Base condition
	if isinstance(setObject, Primitive):
		return setObject

	# General rule:
	# Create output set of the same type as this set

	simpedObjs = []
	for obj in setObject:
		simpObj = recurseAndSimplify(obj)
		if simpObj is not None:
			simpedObjs.append(simpObj)

	# IPython.embed()
	# COrnercase: let's check if this subtraction only has 1 element...
	if len(simpedObjs) == 1 and isinstance(simpedObjs[0], SetSubtract):
		return simpedObjs[0]

	simpedSet = type(setObject)(simpedObjs)

	# Cornercase: let's check if it's a subtraction.
	if isinstance(simpedSet, SetSubtract):
		if simpedSet[0] == simpedSet[1]:
			return None
		elif isinstance(simpedSet[0], SetSubtract) and simpedSet[0][1] == simpedSet[
			1]:  # subtracting the same thing twice
			return simpedSet[0]

		# elif isinstance(frozenVersion(simpedSet[0]), FrozenSetUnion) and isinstance(frozenVersion(simpedSet[1]), FrozenSetUnion):
		#    diff = simpedSet[0].difference(simpedSet[1])
		#    if len(diff) == 0:
		#        return None
		#    if len(diff) == 1:
		#        return list(diff)[0]
		#    return diff
		elif isinstance(frozenVersion(simpedSet[1]),
		                FrozenSetIntersection):  # TODO: Does this need to include intersections on the LHS?
			# IPython.embed()
			if isinstance(simpedSet[0], Primitive):
				diff = simpedSet[1].difference([simpedSet[0]])
			else:
				diff = simpedSet[1].difference(simpedSet[0])
			if len(diff) == 0:
				return frozenVersion(simpedSet[0])
			if len(diff) == 1:
				return SetSubtract(frozenVersion(simpedSet[0]), list(diff)[0])
			return SetSubtract(frozenVersion(simpedSet[0]), diff)
		else:
			return simpedSet

	setObject = simpedSet
	# Now we've already recursed, so the next task is just to see how we can simplify the outputSet

	initSet = setObject
	returnSet = unfrozenVersion(type(setObject)())
	processed_list = []  # Don't reprocess things we've already simplified

	for pair in itertools.combinations(setObject, 2):
		obj0 = pair[0]
		obj1 = pair[1]

		if obj0 in processed_list or obj1 in processed_list:
			continue

		(simplifiedPair, changed) = simplify(obj0, obj1, setObject)

		if changed:
			processed_list.append(obj0)
			processed_list.append(obj1)
		# TODO: UNCOMMENT
		# simplifiedPair = type(setObject)([obj0, obj1])

		# Now check both elements of the simplified pair.  Are either single elements?  Then flatten them out.

		# TODO: Make this less hackey
		simpPairType = type(simplifiedPair)
		if simplifiedPair is None:
			continue

		if changed:
			# IPython.embed()
			if type(unfrozenVersion(simplifiedPair)) == type(unfrozenVersion(setObject)):
				for item in simplifiedPair:
					returnSet.add(frozenVersion(item))
			elif changed:
				returnSet.add(simplifiedPair)
	# IPython.embed()
	# IPython.embed()

	# add back in all unprocessed items

	for obj in setObject:
		if obj not in processed_list:
			returnSet.add(obj)

	if returnSet == initSet:  # Did nothing change?  Then we're done
		# print('done')
		# IPython.embed()
		if len(returnSet) == 1:
			return list(returnSet)[0]  # Get rid of unnecessary nesting
		if len(returnSet) == 0:
			return None
		else:
			return frozenVersion(returnSet)

	# print 'not done'
	# IPython.embed()
	# initSet = returnSet #Otherwise, something changed, so iterate until convergence
	# setObject = returnSet
	return recurseAndSimplify(frozenVersion(returnSet))


# Iterate over every pair
# Call simplify on that pair
# Return two new objects representing the simplified version of that pair
# FREEZE them
# Union them if they share the same type as this set
# Add it if it disagrees

# Then, take the resulting set, and have it replace the old set
# Repeat this until some termination condition TODO


class Vector:
	x = 0
	y = 0
	z = 0

	def __init__(self, x, y, z):
		self.x = x
		self.y = y
		self.z = z

	def __str__(self):
		return ''.join(['Vector(', str(self.x), ',', str(self.y), ',', str(self.z), ')'])


class Expression(object):

	def __init__(self, *args, **kwargs):
		if not isinstance(self, Primitive):
			expressionToStringID[self] = 'node' + str(len(expressionToStringID))

	def export2CSG(self):
		pass


class Primitive(Expression):

	def __init__(self):
		Expression.__init__(self)

	def __new__(cls, *args, **kwargs):
		#   super(Expression, cls).__new__(cls)
		# inst = Expression.__new__(cls, *args, **kwargs)
		inst = Expression.__new__(cls)
		inst.__init__(*args)
		if not inst.checkIfExists():
			primitives.add(inst)
			geometryEditorObjectScript[inst.toGeometryEditor(globalIdx)] = 'node' + str(len(expressionToStringID))
			expressionToStringID[inst] = 'node' + str(len(expressionToStringID))
			return inst
		else:
			closest = inst.getClosest()
			return closest

	"""
	def __init__(self):
		Expression.__init__(self)
		if not self.checkIfExists():
			primitives.add(self)
		else:
			closest = self.getClosest()
			self.__dict__ = copy.deepcopy(closest.__dict__)
	"""

	# get closest:
	def getClosest(self):
		# Should never get called if there are no primitives matching this type in the set.  Not this method's fault.
		min_dist = sys.float_info.max
		for key in primitives:
			if type(self) == type(key):
				my_feature = self.getFeatureVector()
				their_feature = key.getFeatureVector()
				distance = np.linalg.norm(my_feature - their_feature)
				if distance < min_dist:
					min_dist = distance
					closest_primitive = key

		assert (closest_primitive is not None)
		return closest_primitive

	def checkIfExists(self):
		# loop over all expressions
		# Check if it's a cuboid
		# If it's a cuboid, check if min_point, side, and quaternion are close
		for key in primitives:
			if type(self) == type(key):
				my_feature = self.getFeatureVector()
				their_feature = key.getFeatureVector()
				if Primitive.isClose(my_feature, their_feature):
					return True
		return False  # Didn't see it

	def getFeatureVector(self):
		# Children need to handle this
		pass

	def export2CSG(self):
		pass

	@staticmethod
	def isClose(a, b):
		return np.linalg.norm(a - b) < DIST_THRESH


def radians_to_degrees(t):
	return t / math.pi * 180


class Cuboid(Primitive):

	def __new__(cls, *args, **kwargs):
		return Primitive.__new__(cls, *args, **kwargs)

	def __init__(self, euler_angles, min_point, side):

		if side.x < 0.0:
			side.x = 0.0
		if side.y < 0.0:
			side.y = 0.0
		if side.z < 0.0:
			side.z = 0.0

		self.min_point = min_point
		self.side = side
		self.euler_angles = euler_angles

		Primitive.__init__(self)

	# First, see if this already exists in the seen Primitives.  If so, just replace all of this instance's values iwth those that we've seen

	def __str__(self):
		return ''.join(['Cuboid(', str(self.euler_angles), ', ', str(self.min_point), ', ', str(self.side), ')'])

	def toGeometryEditor(self, globalIdx=None):

		# rotation is sufficient to define transformations
		# (no need to use translation given minPt and Side of Box)
		r = R.from_euler('xyz', [self.euler_angles.x, self.euler_angles.y, self.euler_angles.z], degrees=False)
		rotVec = r.as_rotvec()

		myNodeName = 'myNode' + str(globalIdx)
		strToReturn = 'const '
		globalIdx += 1

		strToReturn += myNodeName + ' = object.addBox();\n'
		strToReturn += myNodeName + '.point1.set(' + str(self.min_point.x) + ',' + str(self.min_point.y) + ',' + str(
			self.min_point.z) + ');\n'
		strToReturn += myNodeName + '.point2.set(' + str(self.side.x+self.min_point.x) + ',' + str(self.side.y+self.min_point.y) + ',' + str(
			self.side.z+self.min_point.z) + ');\n'

		strToReturn += myNodeName + '.innerRotation.center.set(0,0,0);\n'
		strToReturn += myNodeName + '.innerRotation.axis.set(' + str(rotVec[0]) + ',' + str(rotVec[1]) + ',' + str(
			rotVec[2]) + ');\n'
		strToReturn += myNodeName + '.innerRotation.angle.set(' + str(LA.norm(rotVec)) + ');\n'

		return strToReturn

	def export2CSG(self):
		lines = []
		lines.append(expressionToStringID[self] + ' {\n')
		lines.append('\tType leaf\n')
		lines.append('\tMaterialIndex 0\n')
		lines.append('\tTransform {\n')
		lines.append('\t\tZRotate ')
		lines.append(str(radians_to_degrees(self.euler_angles.z)))
		lines.append('\n')
		lines.append('\t\tYRotate ')
		lines.append(str(radians_to_degrees(self.euler_angles.y)))
		lines.append('\n')
		lines.append('\t\tXRotate ')
		lines.append(str(radians_to_degrees(self.euler_angles.x)))
		lines.append('\n')
		lines.append('\t\tCuboid {\n')
		lines.append(''.join(
			['\t\t\t', 'pmin ', str(self.min_point.x), ' ', str(self.min_point.y), ' ', str(self.min_point.z), '\n']))
		lines.append(''.join(['\t\t\t', 'size ', str(self.side.x), ' ', str(self.side.y), ' ', str(self.side.z), '\n']))
		lines.append('\t\t}\n')
		lines.append('\t}\n')
		lines.append('}\n')
		return lines

	def getFeatureVector(self):
		# TODO: Change euler angle to quaternion
		return np.array([self.min_point.x, self.min_point.y, self.min_point.z, self.side.x, self.side.y, self.side.z,
		                 self.euler_angles.x, self.euler_angles.y, self.euler_angles.z])


class Cylinder(Primitive):

	def __new__(cls, *args, **kwargs):
		return Primitive.__new__(cls, *args, **kwargs)

	def __init__(self, euler_angles, min_point, side, radius):

		if side.x < 0.0:
			side.x = 0.0
		if side.y < 0.0:
			side.y = 0.0
		if side.z < 0.0:
			side.z = 0.0

		self.min_point = min_point
		self.side = side
		self.euler_angles = euler_angles
		self.radius = radius

		Primitive.__init__(self)

	def __str__(self):
		return ''.join(['Cylinder(', str(self.euler_angles), ', ', str(self.min_point), ', ', str(self.side), ', ',
		                str(self.radius), ')'])

	def toGeometryEditor(self, globalIdx=None):

		# rotation is sufficient to define transformations
		# (no need to use translation given minPt and Side of Box)
		r = R.from_euler('xyz', [self.euler_angles.x, self.euler_angles.y, self.euler_angles.z], degrees=False)
		rotVec = r.as_rotvec()

		myNodeName = 'myNode' + str(globalIdx)
		strToReturn = 'const '

		strToReturn += myNodeName + ' = object.addCylinder();\n'
		strToReturn += myNodeName + '.point1.set(' + str(self.min_point.x) + ',' + str(self.min_point.y) + ',' + str(
			self.min_point.z) + ');\n'
		strToReturn += myNodeName + '.point2.set(' + str(self.side.x+self.min_point.x) + ',' + str(self.side.y+self.min_point.y) + ',' + str(
			self.side.z+self.min_point.z) + ');\n'
		strToReturn += myNodeName + '.radius.set(' + str(self.radius) + ');\n'

		strToReturn += myNodeName + '.innerRotation.center.set(0,0,0);\n'
		strToReturn += myNodeName + '.innerRotation.axis.set(' + str(rotVec[0]) + ',' + str(rotVec[1]) + ',' + str(
			rotVec[2]) + ');\n'
		strToReturn += myNodeName + '.innerRotation.angle.set(' + str(LA.norm(rotVec)) + ');\n'

		return strToReturn

	def export2CSG(self):
		lines = []
		lines.append(expressionToStringID[self] + ' {\n')
		lines.append('\tType leaf\n')
		lines.append('\tMaterialIndex 0\n')
		lines.append('\tTransform {\n')
		lines.append('\t\tZRotate ')
		lines.append(str(radians_to_degrees(self.euler_angles.z)))
		lines.append('\n')
		lines.append('\t\tYRotate ')
		lines.append(str(radians_to_degrees(self.euler_angles.y)))
		lines.append('\n')
		lines.append('\t\tXRotate ')
		lines.append(str(radians_to_degrees(self.euler_angles.x)))
		lines.append('\n')
		lines.append('\t\tCylinder {\n')
		lines.append(''.join(
			['\t\t\t', 'Center ', str(self.min_point.x), ' ', str(self.min_point.y), ' ', str(self.min_point.z), '\n']))
		lines.append(''.join(['\t\t\t', 'Dir ', str(self.side.x), ' ', str(self.side.y), ' ', str(self.side.z), '\n']))
		lines.append(''.join(['\t\t\t', 'Radius ', str(self.radius), '\n']))
		lines.append('\t\t}\n')
		lines.append('\t}\n')
		lines.append('}\n')
		return lines

	def getFeatureVector(self):
		# TODO: Change euler angle to quaternion
		return np.array([self.min_point.x, self.min_point.y, self.min_point.z, self.side.x, self.side.y, self.side.z,
		                 self.euler_angles.x, self.euler_angles.y, self.euler_angles.z, self.radius])


class Sphere(Primitive):

	def __new__(cls, *args, **kwargs):
		return Primitive.__new__(cls, *args, **kwargs)

	def __init__(self, center, radius):

		self.center = center
		if radius < 0:
			self.radius = 0.0
		else:
			if sqrt_radius:
				self.radius = math.sqrt(radius)
			else:
				self.radius = radius

		Primitive.__init__(self)

	def __str__(self):
		return ''.join(['Sphere(', str(self.center), ',', str(self.radius), ')'])

	def toGeometryEditor(self, globalIdx=None):

		# rotation is sufficient to define transformations
		# (no need to use translation given minPt and Side of Box)
		# r = R.from_euler('xyz', [self.euler_angles.x, self.euler_angles.y, self.euler_angles.z], degrees=False)
		# rotVec = r.as_rotvec()

		myNodeName = 'myNode' + str(globalIdx)
		strToReturn = 'const '

		strToReturn += myNodeName + ' = object.addSphere();\n'
		strToReturn += myNodeName + '.center.set(' + str(self.center.x) + ',' + str(self.center.y) + ',' + str(
			self.center.z) + ');\n'
		strToReturn += myNodeName + '.radius.set(' + str(self.radius) + ');\n'

		# strToReturn += myNodeName + '.innerRotation.center.set(0,0,0);\n'
		# strToReturn += myNodeName + '.innerRotation.axis.set(' + rotVec + ');\n'
		# strToReturn += myNodeName + '.innerRotation.angle.set(' + LA.norm(rotVec) + ');\n'

		return strToReturn

	def export2CSG(self):
		lines = []
		lines.append(expressionToStringID[self] + ' {\n')
		lines.append('\tType leaf\n')
		lines.append('\tMaterialIndex 0\n')
		lines.append('\tSphere {\n')
		lines.append(
			''.join(['\t\t', 'Center ', str(self.center.x), ' ', str(self.center.y), ' ', str(self.center.z), '\n']))
		lines.append(''.join(['\t\t', 'Radius ', str(self.radius), '\n']))
		lines.append('\t}\n')
		lines.append('}\n')
		return lines

	def getFeatureVector(self):
		# TODO: Change euler angle to quaternion
		return np.array([self.center.x, self.center.y, self.center.z, self.radius])


class Union(Expression):

	def __init__(self, *exprs):
		Expression.__init__(self)
		self.exprs = exprs

	def __str__(self):
		res = "Union("
		for e in self.exprs:
			res += str(e)
			res += ","
			res += ")"
		return res

	def toGeometryEditor(self, globalIdx=None):

		# rotation is sufficient to define transformations
		# (no need to use translation given minPt and Side of Box)
		# r = R.from_euler('xyz', [self.euler_angles.x, self.euler_angles.y, self.euler_angles.z], degrees=False)
		# rotVec = r.as_rotvec()

		myNodeName = 'myNode' + str(globalIdx)
		strToReturn = ''

		for idx in range(len(self.exprs)):
			if len(self.exprs) == 2:
				strToReturn += 'const myNode' + str(globalIdx) + ' = object.addFuseOperation();\n'
				strToReturn += myNodeName + '.leftArg.set(' + 'my' + expressionToStringID[
					self.exprs[0]].capitalize() + ');\n'
				strToReturn += myNodeName + '.rightArg.set(' + 'my' + expressionToStringID[
					self.exprs[1]].capitalize() + ');\n'
				break
			else:
				if idx < len(self.exprs) - 1:
					strToReturn += 'const myNode' + str(globalIdx) + '_' + str(
						idx + 1) + ' = object.addFuseOperation();\n'
					if idx == 0:
						strToReturn += 'myNode' + str(globalIdx) + '_' + str(
							idx + 1) + '.leftArg.set(' + 'my' + expressionToStringID[
							               self.exprs[idx]].capitalize() + ');\n'
					else:
						strToReturn += 'myNode' + str(globalIdx) + '_' + str(
							idx + 1) + '.leftArg.set(' + 'myNode' + str(globalIdx) + '_' + str(idx) + ');\n'
					strToReturn += 'myNode' + str(globalIdx) + '_' + str(idx + 1) + '.rightArg.set(' + 'my' + \
					               expressionToStringID[
						               self.exprs[idx]].capitalize() + ');\n'
				else:
					strToReturn += myNodeName + ' = object.addFuseOperation();\n'
					strToReturn += 'myNode' + str(globalIdx) + '.leftArg.set(' + 'myNode' + str(globalIdx) + '_' + str(
						idx) + ');\n'
					strToReturn += 'myNode' + str(globalIdx) + '.rightArg.set(' + 'my' + \
					               expressionToStringID[
						               self.exprs[idx]].capitalize() + ');\n'

		# strToReturn += myNodeName + '.innerRotation.center.set(0,0,0);\n'
		# strToReturn += myNodeName + '.innerRotation.axis.set(' + rotVec[0] + ',' + rotVec[1]+ ',' + rotVec[2] + ');\n'
		# strToReturn += myNodeName + '.innerRotation.angle.set(' + str(LA.norm(rotVec)) + ');\n'

		return strToReturn

	def export2CSG(self):
		lines = []
		lines.append(expressionToStringID[self] + ' {\n')
		lines.append('\tType internal\n')
		lines.append('\tOperator union\n')
		lines.append('\tnumChildren {}\n'.format(len(self.exprs)))
		childrenLine = "\tChild "
		for e in self.exprs:
			childrenLine += expressionToStringID[e] + " "
		childrenLine += "\n"
		lines.append(childrenLine)
		lines.append('}\n')
		return lines


class Intersection(Expression):

	def __init__(self, *exprs):
		Expression.__init__(self)
		self.exprs = exprs

	def __str__(self):
		res = "Intersection("
		for e in self.exprs:
			res += str(e)
			res += ","
			res += ")"
		return res

	def toGeometryEditor(self, globalIdx=None):

		# rotation is sufficient to define transformations
		# (no need to use translation given minPt and Side of Box)
		# r = R.from_euler('xyz', [self.euler_angles.x, self.euler_angles.y, self.euler_angles.z], degrees=False)
		# rotVec = r.as_rotvec()

		myNodeName = 'myNode' + str(globalIdx)
		strToReturn = 'const '

		# ATTENTION => Y A T IL > 2

		if (len(self.exprs) > 2):
			print("erreur")

		strToReturn += myNodeName + ' = object.addCommonOperation();\n'
		strToReturn += myNodeName + '.leftArg.set(' + 'my' + expressionToStringID[self.exprs[0]].capitalize() + ');\n'
		strToReturn += myNodeName + '.rightArg.set(' + 'my' + expressionToStringID[self.exprs[1]].capitalize() + ');\n'

		# strToReturn += myNodeName + '.innerRotation.center.set(0,0,0);\n'
		# strToReturn += myNodeName + '.innerRotation.axis.set(' + rotVec[0] + ',' + rotVec[1]+ ',' + rotVec[2] + ');\n'
		# strToReturn += myNodeName + '.innerRotation.angle.set(' + str(LA.norm(rotVec)) + ');\n'

		return strToReturn

	def export2CSG(self):
		lines = []
		lines.append(expressionToStringID[self] + ' {\n')
		lines.append('\tType internal\n')
		lines.append('\tOperator intersect\n')
		lines.append('\tnumChildren {}\n'.format(len(self.exprs)))
		childrenLine = "\tChild "
		for e in self.exprs:
			childrenLine += expressionToStringID[e] + " "
		childrenLine += "\n"
		lines.append(childrenLine)
		lines.append('}\n')
		return lines


class Subtract(Expression):

	def __init__(self, e1, e2):
		Expression.__init__(self)
		self.e1 = e1
		self.e2 = e2

	def __str__(self):
		return ''.join(['Subtract(', str(self.e1), ',', str(self.e2), ')'])

	def toGeometryEditor(self, globalIdx=None):
		# rotation is sufficient to define transformations
		# (no need to use translation given minPt and Side of Box)
		# r = R.from_euler('xyz', [self.euler_angles.x, self.euler_angles.y, self.euler_angles.z], degrees=False)
		# rotVec = r.as_rotvec()

		myNodeName = 'myNode' + str(globalIdx)
		strToReturn = 'const '

		strToReturn += myNodeName + ' = object.addCutOperation();\n'
		strToReturn += myNodeName + '.leftArg.set(' + 'my' + expressionToStringID[
			self.e1].capitalize() + ');\n'
		strToReturn += myNodeName + '.rightArg.set(' + 'my' + expressionToStringID[
			self.e2].capitalize() + ');\n'

		# strToReturn += myNodeName + '.innerRotation.center.set(0,0,0);\n'
		# strToReturn += myNodeName + '.innerRotation.axis.set(' + rotVec[0] + ',' + rotVec[1]+ ',' + rotVec[2] + ');\n'
		# strToReturn += myNodeName + '.innerRotation.angle.set(' + str(LA.norm(rotVec)) + ');\n'

		return strToReturn

	def export2CSG(self):
		lines = []
		lines.append(expressionToStringID[self] + ' {\n')
		lines.append('\tType internal\n')
		lines.append('\tOperator subtract\n')
		lines.append('\tnumChildren 2\n')
		lines.append(''.join(['\tChild ', expressionToStringID[self.e1], ' ', expressionToStringID[self.e2], '\n']))
		lines.append('}\n')
		return lines


class Negation(Expression):

	def __init__(self, e1):
		Expression.__init__(self)
		self.e1 = e1

	def __str__(self):
		return ''.join(['Negation(', str(self.e1), ')'])

	def export2CSG(self):
		lines = []
		lines.append(expressionToStringID[self] + ' {\n')
		lines.append('\tType internal\n')
		lines.append('\tOperator subtract\n')
		lines.append('\tnumChildren 1\n')
		lines.append('\tChild ' + expressionToStringID[self.e1] + '\n')
		lines.append('}\n')
		return lines


def export2CSG():
	lines = []
	lines.append('\tCSG {\n')
	lines.append('\tnumNodes ')
	lines.append(str(len(expressionToStringID)))
	lines.append(' \n')
	for expression in expressionToStringID:
		new_lines = expression.export2CSG()
		for line in new_lines:
			lines.append('\t')
			lines.append(line)
	lines.append('\t}')

	return ''.join(lines)


def toGeometryEditor(globalIdx=None):
	lines = []
	lines.append('/*FINAL CSG Conversion of Input Object*/\n')
	lines.append(' \n')
	for expression in expressionToStringID:
    		
		isVisible = globalIdx == len(expressionToStringID)-1
		new_lines = expression.toGeometryEditor(globalIdx)

		lines.append('\n')
		lines.append('/* définition du node n°' + str(globalIdx) + '*/')
		lines.append('\n')

		globalIdx += 1
		for line in new_lines:
			lines.append('')
			lines.append(line)
			
		lines.append('myNode'+str(globalIdx-1)+'.isVisible = '+str(isVisible))
		lines.append('\n')
		
	lines.append('\n')
	lines.append('\n')
	lines.append('/*END Geometry Object Definition*/')

	return ''.join(lines)


def simplifyTree(expression):
	if isinstance(expression, Union):
		union = SetUnion([simplifyTree(e) for e in expression.exprs])
		if len(union) == 1:
			union = union.pop()
		return union

	elif isinstance(expression, Intersection):
		intersection = SetIntersection([simplifyTree(e) for e in expression.exprs])
		if len(intersection) == 1:
			intersection = intersection.pop()
		return intersection

	elif isinstance(expression, Subtract):
		subtraction = SetSubtract(simplifyTree(expression.e1), simplifyTree(expression.e2))
		if len(subtraction) == 1:
			subtraction = subtraction.pop()
		return subtraction

	elif isinstance(expression, Primitive):
		return expression
	else:
		raise Exception('Unhandled case')


# Usage:
# Arg 1 = input string
# Arg 2 = output filename
if __name__ == "__main__":
	in_file = sys.argv[1]
	print('in_file', in_file)

	with open(in_file, 'r') as myfile:
		input_string = myfile.read()

	# input_string = sys.argv[1]
	# input_string = 'Intersection(Union(Sphere(Vector(1.00001, 2, 3), 1)), Cuboid(Vector(1, 2, 3), Vector(4, 5, 6), Vector(7, 8, 9)), Sphere(Vector(1, 2, 3), 1))'
	# input_string = 'Intersection(Union(Sphere(Vector(1, 1, 1), 1), Sphere(Vector(2, 1, 1), 1)), Union(Sphere(Vector(1, 1, 1), 1), Sphere(Vector(3, 1, 1), 1)))'
	# input_string = 'Union(Intersection(Sphere(Vector(1, 1, 1), 1), Sphere(Vector(2, 1, 1), 1)), Intersection(Sphere(Vector(1, 1, 1), 1), Sphere(Vector(3, 1, 1), 1)))'
	# input_string = 'Union(Sphere(Vector(1, 1, 1), 1), Subtract(Sphere(Vector(2, 1, 1), 1), Sphere(Vector(1, 1, 1), 1)))'
	# input_string = 'Union(Subtract(Sphere(Vector(2, 1, 1), 1), Sphere(Vector(1, 1, 1), 1)), Sphere(Vector(1, 1, 1), 1))'
	# input_string = 'Intersection(Subtract(Sphere(Vector(2, 1, 1), 1), Sphere(Vector(1, 1, 1), 1)), Sphere(Vector(1, 1, 1), 1))'
	# input_string = 'Intersection(Subtract(Sphere(Vector(1, 1, 1), 1), Sphere(Vector(2, 1, 1), 1)), Subtract(Sphere(Vector(1, 1, 1), 1), Sphere(Vector(3, 1, 1), 1)))'
	# input_string = 'Union(Subtract(Sphere(Vector(1, 1, 1), 1), Sphere(Vector(2, 1, 1), 1)), Subtract(Sphere(Vector(1, 1, 1), 1), Sphere(Vector(3, 1, 1), 1)))'

	# input_string = 'Cylinder(Vector(0,-1.0472,1.5708),Vector(-30,5.96235e-06,8.6551e-06),Vector(31,0,0),3.99999)'
	# input_string = 'Intersection(Intersection(Cylinder(Vector(0,-0.930273,1.10715),Vector(-10,-0.111803,0.179285),Vector(9.86637,0,0),0.15),Cuboid(Vector(-2.50107,3.14159,-0.463647),Vector(-10,-10,-10),Vector(20,20,9.86637))),Cuboid(Vector(-2.50107,3.14159,-0.463647),Vector(-10,-10,-10),Vector(20,20,20)))'
	# input_string = 'Union(Union(Intersection(Intersection(Sphere(Vector(1.5,-2,4),2.89),Sphere(Vector(1.5,-3.1,4),4)),Intersection(Sphere(Vector(-0.5,2.2,1.4),2.56),Sphere(Vector(-0.5,2.2,1.4),2.56))),Union(Subtract(Sphere(Vector(1.4,3.3,0.8),4.84),Sphere(Vector(-0.5,2.2,1.4),2.56)),Subtract(Sphere(Vector(1.5,-3.1,4),4),Sphere(Vector(1.5,-2,4),2.89)))),Intersection(Union(Intersection(Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)),Union(Sphere(Vector(-3.3,-2.1,-0.1),0.64),Sphere(Vector(-4.76837e-07,-1.19209e-07,-2.98023e-07),1.44))),Union(Union(Sphere(Vector(-3.3,-2.1,-0.1),0.64),Sphere(Vector(-4.76837e-07,-1.19209e-07,-2.98023e-07),1.44)),Subtract(Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21),Sphere(Vector(-0.5,2.2,1.4),2.56)))))'
	# input_string = 'Subtract(Subtract(Sphere(Vector(5.96046e-08,5.96046e-08,5.96046e-08),1),Sphere(Vector(0.6,-8.9407e-08,1),1)),Subtract(Sphere(Vector(0.6,-8.9407e-08,1),1),Sphere(Vector(0.6,-8.9407e-08,1),1)))'
	# input_string = 'Subtract(Union(Union(Intersection(Sphere(Vector(0,1,1.19209e-07),1),Sphere(Vector(1,-7.45058e-08,1),0.999998)),Sphere(Vector(0,1,1.19209e-07),1)),Sphere(Vector(5.96046e-08,5.96046e-08,5.96046e-08),1)),Union(Intersection(Union(Sphere(Vector(0,1,1.19209e-07),1),Sphere(Vector(0,1,1.19209e-07),1)),Subtract(Sphere(Vector(1,-7.45058e-08,1),0.999998),Sphere(Vector(0,1,1.19209e-07),1))),Intersection(Intersection(Sphere(Vector(1,-7.45058e-08,1),0.999998),Sphere(Vector(5.96046e-08,5.96046e-08,5.96046e-08),1)),Union(Sphere(Vector(0,1,1.19209e-07),1),Sphere(Vector(5.96046e-08,5.96046e-08,5.96046e-08),1)))))'
	# input_string = 'Intersection(Cuboid(Vector(-1.50122,-2.56731,-0.91021),Vector(0.498985,-10,-10),Vector(9.50102,20,20)),Cuboid(Vector(-1.50094,-3.10677,-1.1369),Vector(2.65187e-07,-1.17067e-08,-5.0861e-09),Vector(1,0.6,10)))'
	# input_string = 'Union(Cuboid(Vector(-1.50094,-3.10677,-1.1369),Vector(2.65187e-07,-10,-10),Vector(10,10,10)),Union(Intersection(Union(Cylinder(Vector(0,0.0650734,-0.613487),Vector(-10,1.05119,0.254937),Vector(20,0,0),0.0600001),Cuboid(Vector(-1.49326,-3.13274,-1.48509),Vector(-10,-10,-10),Vector(20,20,20))),Intersection(Cylinder(Vector(0,0.0650734,-0.613487),Vector(-10,1.05119,0.254937),Vector(20,0,0),0.0600001),Cuboid(Vector(-1.50122,-2.56731,-0.91021),Vector(0.498985,-10,0.580813),Vector(9.50102,9.94285,9.41919)))),Union(Cuboid(Vector(-1.50094,-3.10677,-1.1369),Vector(-10,-10,1),Vector(10,10,9)),Subtract(Cuboid(Vector(-1.50094,-3.10677,-1.1369),Vector(-10,-1.17067e-08,-5.0861e-09),Vector(11,0.6,1)),Cylinder(Vector(0,0.0650734,-0.613487),Vector(-10,1.05119,0.254937),Vector(20,0,0),0.0600001)))))'
	# input_string = 'Union(Subtract(Subtract(Subtract(Sphere(Vector(-3.3,-2.1,-0.1),0.64),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)),Union(Union(Union(Sphere(Vector(1.4,3.3,0.8),4.84),Sphere(Vector(1.5,-3.1,4),4)),Subtract(Sphere(Vector(-4.76837e-07,-1.19209e-07,-2.98023e-07),1.44),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21))),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)))'
	# input_string = 'Union(Subtract(Subtract(Union(Sphere(Vector(1,-5.96046e-08,1),0.49),Sphere(Vector(-4.76837e-07,-1.19209e-07,-2.98023e-07),1.44)),Union(Sphere(Vector(1,-5.96046e-08,1),0.49),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21))),Sphere(Vector(1.4,3.3,0.8),4.84)),Union(Union(Intersection(Sphere(Vector(1.4,3.3,0.8),4.84),Sphere(Vector(1,-5.96046e-08,1),0.49)),Subtract(Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21),Sphere(Vector(-4.76837e-07,-1.19209e-07,-2.98023e-07),1.44))),Sphere(Vector(1.4,3.3,0.8),4.84)))'
	# input_string = 'Union(Subtract(Subtract(Subtract(Sphere(Vector(-3.3,-2.1,-0.1),0.64),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)),Union(Subtract(Union(Sphere(Vector(-4.76837e-07,-1.19209e-07,-2.98023e-07),1.44),Sphere(Vector(1.4,3.3,0.8),4.84)),Subtract(Sphere(Vector(-3.3,-2.1,-0.1),0.64),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21))),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)))'
	# input_string = 'Union(Union(Intersection(Intersection(Sphere(Vector(1.5,-2,4),2.89),Sphere(Vector(1.5,-3.1,4),4)),Intersection(Sphere(Vector(-0.5,2.2,1.4),2.56),Sphere(Vector(-0.5,2.2,1.4),2.56))),Union(Subtract(Sphere(Vector(1.4,3.3,0.8),4.84),Sphere(Vector(-0.5,2.2,1.4),2.56)),Subtract(Sphere(Vector(1.5,-3.1,4),4),Sphere(Vector(1.5,-2,4),2.89)))),Intersection(Union(Intersection(Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21),Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21)),Union(Sphere(Vector(-3.3,-2.1,-0.1),0.64),Sphere(Vector(-4.76837e-07,-1.19209e-07,-2.98023e-07),1.44))),Union(Union(Sphere(Vector(-3.3,-2.1,-0.1),0.64),Sphere(Vector(-4.76837e-07,-1.19209e-07,-2.98023e-07),1.44)),Subtract(Sphere(Vector(-1.19209e-07,1,5.96046e-08),1.21),Sphere(Vector(-0.5,2.2,1.4),2.56)))))'

	# Satellite:
	# input_string = 'Union(Union(Sphere(Vector(0,0,0),1),Sphere(Vector(0,0,0),1),Intersection(Union(Cylinder(Vector(0,-1.5708,0),Vector(-30,0,-2.2656e-16),Vector(29.3,0,0),1.2),Cylinder(Vector(0,-1.5708,0),Vector(0.7,0,-2.2656e-16),Vector(29.3,0,0),1.2)),Cuboid(Vector(1.5708,-1.74564,-1.5708),Vector(-3.64359,-30,-30),Vector(5.61309,30.3479,60)))), Union(Union(Cuboid(Vector(-1.5708,-2.26912,1.5708),Vector(-0.967901,0.985899,1.5),Vector(4.99949,0.599939,2)),Cuboid(Vector(-1.5708,-2.26912,1.5708),Vector(-0.767921,1.58584,1.7),Vector(4.59953,0.299969,1.6)),Cylinder(Vector(0,-0.872473,-1.5708),Vector(-0.967901,-3.5,1.28549),Vector(4.99949,0,0),0.3)), Union(Union(Subtract(Union(Sphere(Vector(0.388,0.672,6.898),9),Sphere(Vector(0,0,3.6),0.36)),Union(Cuboid(Vector(0.261462,0,2.61909),Vector(-30,-30,4.86407),Vector(60,60,25.1359)),Sphere(Vector(0.388,0.672,6.898),7.84))),Cylinder(Vector(0,0,-0),Vector(-1.7,0,2),Vector(1.7,0,0),0.2),Union(Cylinder(Vector(0,-1.5708,0),Vector(0.7,0,-2.2656e-16),Vector(2.9,0,0),1.2),Cylinder(Vector(0,-1.30933,1.04829),Vector(3.47765,-1.38778e-17,1.03397),Vector(3.38649,0,0),0.2))), Union(Union(Union(Union(Cylinder(Vector(0,-1.5708,0),Vector(0.7,0,-2.2656e-16),Vector(3,0,0),1.2),Cuboid(Vector(1.5708,-1.83275,-1.5708),Vector(1.63181,-2.81767,-3.3),Vector(0.899893,4.59945,1.6))),Cuboid(Vector(1.5708,-1.83275,-1.5708),Vector(1.63181,-3.01764,-3.5),Vector(0.599929,4.99941,2))),Cylinder(Vector(0,0,-0),Vector(0,0,2),Vector(1.5,0,0),0.2),Cylinder(Vector(0,0.261955,1.5708),Vector(-3.01764,-3.5,1.93225),Vector(4.99941,0,0),0.3)), Union(Union(Sphere(Vector(0,0,0),1),Subtract(Sphere(Vector(0,0,0),1),Union(Sphere(Vector(0,0,0),1),Cylinder(Vector(0,0,-0),Vector(1.5,0,-2),Vector(28.5,0,0),0.2))),Union(Union(Cylinder(Vector(0,-1.5708,0),Vector(-3.7,0,-2.2656e-16),Vector(3,0,0),1.2),Cylinder(Vector(0,0,-0),Vector(-1.8,0,-2),Vector(3.3,0,0),0.2)),Union(Sphere(Vector(0,0,0),1),Sphere(Vector(0,0,0),1)))), Union(Union(Cuboid(Vector(-1.5708,-1.39595,1.5708),Vector(-2.26943,-1.1518,-7.5),Vector(0.59985,2.99833,6)),Union(Intersection(Cuboid(Vector(-0,-1.5708,0),Vector(-2,-30,-7.2),Vector(32,60,2.4)),Cuboid(Vector(-1.5708,-1.39595,1.5708),Vector(-2.26943,-0.852786,-7.2),Vector(0.899775,2.3994,7.2))),Cylinder(Vector(0,0.174846,1.5708),Vector(-1.15271,-7.5,-1.9704),Vector(2.99925,0,0),0.3)),Cuboid(Vector(-1.5708,-1.39595,1.5708),Vector(-1.66958,-0.852786,-4.2),Vector(0.299925,2.3994,2.4))), Union(Cuboid(Vector(1.5708,-2.1821,-1.5708),Vector(-1.33784,-0.0529937,1.8),Vector(0.299965,2.39972,2.4)),Union(Union(Cuboid(Vector(1.5708,-2.1821,-1.5708),Vector(-1.33784,-0.0529937,4.8),Vector(0.299965,2.39972,2.4)),Cylinder(Vector(0,0,-0),Vector(-4.8,0,-2),Vector(4.8,0,0),0.2)),Cuboid(Vector(1.5708,-2.1821,-1.5708),Vector(-1.93777,-0.352958,1.5),Vector(0.599929,2.99964,6))),Cylinder(Vector(0,0.611299,1.5708),Vector(-0.352958,7.5,-1.63891),Vector(2.99964,0,0),0.3))))))))'

	# Clamp:
	# input_string = 'Union(Union(Subtract(Union(Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,-2,-2.14313e-16),Vector(7,1.5,5)),Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,0.5,-2.14313e-16),Vector(7,1.5,5))),Union(Cylinder(Vector(0,-0,1.5708),Vector(-2,3,0),Vector(4,0,0),0.7),Cylinder(Vector(0,-1.5708,0),Vector(-10,0,-2.14313e-16),Vector(13.5,0,0),1))),Subtract(Cylinder(Vector(0,0,1.5708),Vector(-2.5,3,0),Vector(5,0,0),2),Union(Cylinder(Vector(0,0,1.5708),Vector(-0.5,3,0),Vector(1,0,0),2),Cylinder(Vector(0,-0,1.5708),Vector(-10,3,0),Vector(20,0,0),0.7))),Subtract(Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,-2.5,-2.14313e-16),Vector(7,5,5)),Union(Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,-1,-2.14313e-16),Vector(7,2,5)),Cuboid(Vector(-0,-1.5708,0),Vector(-2.5,-2.5,-2.14313e-16),Vector(5,5,4))))), Union(Subtract(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-5,-10),Vector(7,10,5.65)),Union(Cylinder(Vector(0,-1.5708,0),Vector(-10,4.15,-4.35),Vector(20,0,0),1.7),Cylinder(Vector(0,-1.5708,0),Vector(-10,-4.15,-4.35),Vector(13.5,0,0),1.7))),Union(Subtract(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-2.5,-5.95),Vector(7,1.5,5.95)),Cuboid(Vector(0,-1.5708,0),Vector(-2.5,-2.5,-4),Vector(5,0.5,4))),Subtract(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-1,-4.35),Vector(7,2,1.35)),Cylinder(Vector(0,-1.5708,0),Vector(-10,0,-3),Vector(13.5,0,0),1))),Union(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-2,-10),Vector(1,6.15,4.05)),Subtract(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,1,-8.05),Vector(7,1.5,8.05)),Cuboid(Vector(0,-1.5708,0),Vector(-2.5,2,-4),Vector(5,0.5,4))))))'
	# Microscope:
	# input_string = 'Union(Union(Subtract(Cylinder(Vector(0,-1.5708,0),Vector(-4.049,1.415,-1.34711e-15),Vector(4.915,0,0),1),Cylinder(Vector(0,-1.04718,1.5708),Vector(1.00002,-3.06162e-17,1.66533e-16),Vector(29,0,0),4)),Subtract(Cylinder(Vector(0,-0.674886,2.15844),Vector(-4.04776,-0.786562,1.17612),Vector(4.91374,0,0),1),Cylinder(Vector(0,-1.39595,1.5708),Vector(0.939775,1.27976e-16,-0.497223),Vector(1.25967,0,0),2.5)),Cylinder(Vector(0,-1.04718,1.5708),Vector(-1.00002,-3.06162e-17,1.66533e-16),Vector(2,0,0),4)), Union(Union(Intersection(Union(Cylinder(Vector(0,-0.674886,2.15844),Vector(-4.04776,-0.786562,1.17612),Vector(4.91374,0,0),1),Cylinder(Vector(0,-0.674886,0.983149),Vector(-4.04776,0.786562,1.17612),Vector(4.91374,0,0),1)),Cylinder(Vector(0,-1.04718,1.5708),Vector(-30,-3.06162e-17,1.66533e-16),Vector(29,0,0),4)),Union(Intersection(Cylinder(Vector(0,-1.39595,1.5708),Vector(2.19945,1.27976e-16,-0.497223),Vector(27.8006,0,0),2.5),Cylinder(Vector(0,-1.04718,1.5708),Vector(1.00002,-3.06162e-17,1.66533e-16),Vector(29,0,0),4)),Sphere(Vector(0,0.5,0.866),4)),Cylinder(Vector(0,-1.04718,1.5708),Vector(-1.00002,-3.06162e-17,1.66533e-16),Vector(2,0,0),4)), Union(Union(Sphere(Vector(0,17,-5),36),Intersection(Union(Cuboid(Vector(-0,-1.5708,0),Vector(-9,-30,-8),Vector(2,38,16)),Cylinder(Vector(0,-1.5708,0),Vector(-30,17,-1.34711e-15),Vector(60,0,0),6)),Cuboid(Vector(1.5708,-2.09441,-1.5708),Vector(-30,2.22045e-16,-30),Vector(29,17.2224,60))),Cylinder(Vector(0,-0,1.5708),Vector(4,-6.73556e-16,-8),Vector(13,0,0),2)), Union(Union(Cylinder(Vector(0,-1.5708,0),Vector(-9,-8,-5),Vector(2,0,0),3),Union(Union(Cuboid(Vector(0,-1.5708,0),Vector(-9,-8,-8),Vector(2,12,16)),Cuboid(Vector(0,-1.5708,0),Vector(-9,-11,-5),Vector(1,3,5))),Cylinder(Vector(0,-1.5708,0),Vector(-9,-8,5),Vector(2,0,0),3)),Cuboid(Vector(0,-1.5708,0),Vector(-9,-11,-5),Vector(2,3,10))), Union(Union(Cylinder(Vector(0,-1.5708,0),Vector(-20,17,-1.34711e-15),Vector(13,0,0),6),Subtract(Cylinder(Vector(0,-1.5708,0),Vector(-22,7,-1.34711e-15),Vector(4,0,0),12.5),Union(Cylinder(Vector(0,-1.5708,0),Vector(-30,1.5,-1.34711e-15),Vector(21,0,0),7.5),Cuboid(Vector(-0,-1.5708,0),Vector(-22,-11,-8),Vector(14,12.5,16)))),Cylinder(Vector(0,-1.5708,0),Vector(-20,17,-1.34711e-15),Vector(2,0,0),6)), Union(Union(Cylinder(Vector(0,-1.39595,1.5708),Vector(2.19945,1.27976e-16,-0.497223),Vector(19.995,0,0),2.5),Intersection(Subtract(Cylinder(Vector(0,0,-0),Vector(-30,-0.521,-2.954),Vector(60,0,0),20),Cylinder(Vector(0,-0,0),Vector(-3,-0.521,-2.954),Vector(6,0,0),14)),Cuboid(Vector(-1.5708,-1.04718,1.5708),Vector(8.81581,-2.67662,-3),Vector(21.1842,3.70246,6))),Cylinder(Vector(0,-1.39595,1.5708),Vector(9.1977,1.27976e-16,-0.497223),Vector(7.998,0,0),4)), Union(Union(Intersection(Union(Cuboid(Vector(1.5708,-1.74564,-1.5708),Vector(-18.7073,0.000810797,-30),Vector(16.7408,20.567,42.5)),Cuboid(Vector(1.5708,-1.74564,-1.5708),Vector(-9.79155,20.5678,-30),Vector(18.9892,9.43215,42.5))),Cylinder(Vector(0,-1.5708,0),Vector(-30,17,-1.34711e-15),Vector(25,0,0),6)),Subtract(Intersection(Cylinder(Vector(0,0,-0),Vector(-3,-0.521,-2.954),Vector(6,0,0),20),Cuboid(Vector(1.5708,-1.74564,-1.5708),Vector(-1.96651,0.000810797,-3),Vector(31.9665,20.567,15.5))),Subtract(Cylinder(Vector(0,-0,0),Vector(-3,-0.521,-2.954),Vector(6,0,0),14),Cylinder(Vector(0,-1.39595,1.5708),Vector(9.1977,1.27976e-16,-0.497223),Vector(20.8023,0,0),4))),Union(Sphere(Vector(0,17,-5),36),Cylinder(Vector(0,-0,1.5708),Vector(8,-6.73556e-16,-8),Vector(9,0,0),2))), Union(Union(Cuboid(Vector(-0,-1.5708,0),Vector(-22,-13,7.5),Vector(4,20,5)),Intersection(Cylinder(Vector(0,-1.5708,0),Vector(-30,7,-1.34711e-15),Vector(12,0,0),12.5),Subtract(Cuboid(Vector(-0,-1.5708,0),Vector(-22,1.5,-1.34711e-15),Vector(52,28.5,30)),Cylinder(Vector(0,-1.5708,0),Vector(-30,1.5,-1.34711e-15),Vector(60,0,0),7.5))),Cylinder(Vector(0,-1.5708,0),Vector(-22,-13,10),Vector(4,0,0),2.5)), Union(Cuboid(Vector(-0,-1.5708,0),Vector(-22,-13,-12.5),Vector(4,14.5,5)),Subtract(Subtract(Cuboid(Vector(-0,-1.5708,0),Vector(-22,1.5,-12.5),Vector(4,15.5,12.5)),Cylinder(Vector(0,-1.5708,0),Vector(-22,1.5,-1.34711e-15),Vector(4,0,0),7.5)),Subtract(Cuboid(Vector(-0,-1.5708,0),Vector(-22,7,-12.5),Vector(4,10,5)),Cylinder(Vector(0,-1.5708,0),Vector(-30,7,-1.34711e-15),Vector(12,0,0),12.5))),Union(Cylinder(Vector(0,-1.5708,0),Vector(-22,-13,-10),Vector(4,0,0),2.5),Cylinder(Vector(0,-1.5708,0),Vector(-22,-13,-10),Vector(4,0,0),2.5)))))))))))'
	# input_string = 'Union(Union(Intersection(Subtract(Cuboid(Vector(-0,-1.5708,0),Vector(0,0,-2),Vector(21,17,6)),Cuboid(Vector(-1.5708,-3.14159,-0.785398),Vector(11.1723,0,-0.636096),Vector(9.82771,7.8,21.6361))),Union(Cuboid(Vector(-1.5708,-3.14159,-0.785398),Vector(0,0.8,-21),Vector(11.1723,7,30.7581)),Cylinder(Vector(0,0,1.5708),Vector(-21,3.2,0.8),Vector(42,0,0),0.8))),Intersection(Cuboid(Vector(-2.35619,-1.5708,0),Vector(1.8,-21,-0.636096),Vector(19.2,24.4755,3.82858)),Cuboid(Vector(-0,-1.5708,0),Vector(1.8,-21,-3.28),Vector(6,38,6.48))),Subtract(Cylinder(Vector(0,-1.5708,0),Vector(0,0,0),Vector(7.8,0,0),4),Cuboid(Vector(-2.35619,-1.5708,0),Vector(1.8,-0.353053,-0.636096),Vector(19.2,21.3531,10.3942)))),Union(Union(Cylinder(Vector(0,-0,0),Vector(-4,10,5),Vector(12,0,0),3.2),Intersection(Cylinder(Vector(0,-1.5708,0),Vector(0,0,0),Vector(1.8,0,0),4),Cylinder(Vector(0,-0,1.5708),Vector(7.2,-7,2.4),Vector(5.6,0,0),8)),Union(Union(Cylinder(Vector(0,0,1.5708),Vector(1.2,-1.2,0.8),Vector(11.6,0,0),0.8),Cylinder(Vector(0,-1.5708,0),Vector(0,0,0),Vector(1.8,0,0),4)),Union(Cylinder(Vector(0,0,1.5708),Vector(1.2,3.2,0.8),Vector(11.6,0,0),0.8),Cuboid(Vector(0,-1.5708,0),Vector(0,1.2,-1.2),Vector(1.8,11.6,4.4))))), Union( Union(Union(Union(Cylinder(Vector(0,-0,0),Vector(-2.8,15.2,0.8),Vector(3.6,0,0),0.8),Cuboid(Vector(-0,-1.5708,0),Vector(0.8,10,-2),Vector(4.2,5.2,6))),Union(Cylinder(Vector(0,0,1.5708),Vector(7.2,-1.2,0.8),Vector(8,0,0),0.8),Cylinder(Vector(0,-1.5708,0),Vector(1.2,15.2,-1.2),Vector(7.6,0,0),0.8))),Union(Cylinder(Vector(0,-1.5708,0),Vector(1.2,15.2,3.2),Vector(7.2,0,0),0.8),Sphere(Vector(-3.2,15.2,0.8),0.64)),Union(Union(Cylinder(Vector(0,0,1.5708),Vector(12.8,3.2,0.8),Vector(2.4,0,0),0.8),Sphere(Vector(1.2,15.2,0.8),0.64)),Union(Cuboid(Vector(-0,-1.5708,0),Vector(0,12.8,-1.2),Vector(1.2,2.4,4)),Cuboid(Vector(-0,-1.5708,0),Vector(1.2,15.2,-0.8),Vector(7.2,1.8,3.6))))),Union(Union(Union(Subtract(Cuboid(Vector(-0,-1.5708,0),Vector(8.8,-5.2,-1.2),Vector(0.8,3.2,2.4)),Cuboid(Vector(-0,-1.5708,0),Vector(8.8,-4.6,-0.6),Vector(0.8,25.6,1.2))),Union(Cuboid(Vector(-0,-1.5708,0),Vector(9.6,-2,-0.6),Vector(2.2,3.2,2.4)),Cylinder(Vector(0,-1.5708,0),Vector(7.8,0,0),Vector(2.2,0,0),4))),Cylinder(Vector(0,-1.5708,0),Vector(10,0,0),Vector(0.88,0,0),3.6),Cylinder(Vector(0,-1.5708,0),Vector(10,0,-1.88),Vector(2.2,0,0),1)),Union(Union(Intersection(Subtract(Cylinder(Vector(0,-1.5708,0),Vector(8.4,10,0.2),Vector(3.2,0,0),6),Cylinder(Vector(0,-0,1.5708),Vector(-21,-7,2.4),Vector(42,0,0),8)),Union(Cylinder(Vector(0,-0,1.5708),Vector(-21,3.2,9.2),Vector(42,0,0),0.8),Cuboid(Vector(-0,-1.5708,0),Vector(7.8,7.2,-21),Vector(4,5.6,25.6)))),Cuboid(Vector(-0,-1.5708,0),Vector(2.4,0,-2),Vector(6.8,12.8,6)),Intersection(Union(Cuboid(Vector(-0,-1.5708,0),Vector(9.2,0,-1.2),Vector(0.8,17,4.4)),Cylinder(Vector(0,0,1.5708),Vector(-21,-1.2,9.2),Vector(42,0,0),0.8)),Cuboid(Vector(-1.5708,-3.14159,-0.785398),Vector(2.68701,9.2,2.12132),Vector(8.48528,0.8,7.63675)))),Union(Union(Union(Cylinder(Vector(0,-0,0),Vector(-3.2,15.2,9.2),Vector(4,0,0),0.8),Cylinder(Vector(0,-1.5708,0),Vector(8.4,15.2,3.2),Vector(0.400001,0,0),0.8)),Union(Union(Sphere(Vector(-3.2,15.2,9.2),0.64),Sphere(Vector(1.2,15.2,9.2),0.64)),Union(Cuboid(Vector(-0,-1.5708,0),Vector(9.2,12.8,-1.2),Vector(0.8,2.4,4)),Cylinder(Vector(0,0,1.5708),Vector(12.8,-1.2,9.2),Vector(2.4,0,0),0.8))),Union(Cuboid(Vector(-0,-1.5708,0),Vector(8.4,15.2,-0.8),Vector(0.400001,1.8,3.6)),Cuboid(Vector(-0,-1.5708,0),Vector(2.4,10,-2),Vector(6.8,5.2,6)))),Union(Union(Cylinder(Vector(0,-1.5708,0),Vector(10.88,2.2,1.6),Vector(0.92,0,0),0.6),Cylinder(Vector(0,-1.5708,0),Vector(10,2.6,-0.4),Vector(1.8,0,0),0.6)),Intersection(Union(Cylinder(Vector(0,-0,1.5708),Vector(-2,3.2,9.2),Vector(23,0,0),0.8),Cuboid(Vector(-0,-1.5708,0),Vector(5,2.2,-21),Vector(5,7.8,24.2))),Union(Cuboid(Vector(-1.5708,-3.14159,-0.785398),Vector(2.29103,5,-21),Vector(7.60847,5,25.2426)),Cylinder(Vector(0,0,1.5708),Vector(-21,-1.2,9.2),Vector(42,0,0),0.8))),Cylinder(Vector(0,-1.5708,0),Vector(10,0.64,2.6),Vector(1.8,0,0),0.6))))))))'
	# input_string = 'Union(Union(Union(Union(Cylinder(Vector(0,-1.5708,0),Vector(0.5,0.5,-2),Vector(3.75,0,0),0.38),Cuboid(Vector(-0,-1.5708,0),Vector(-1,1.2,-3.5),Vector(4,0.6,3))),Cylinder(Vector(0,0,1.5708),Vector(-0.8,-3,3),Vector(0.6,0,0),0.5)),Union(Cylinder(Vector(0,0,1.5708),Vector(1.2,-3,3),Vector(0.6,0,0),0.5),Union(Cylinder(Vector(0,-1.5708,0),Vector(3.75,0.5,-2),Vector(0.5,0,0),1),Cylinder(Vector(0,-1.5708,0),Vector(4.25,0.5,-2),Vector(1.75,0,0),0.3))),Subtract(Union(Cylinder(Vector(0,-0,1.5708),Vector(-0.8,-1,3),Vector(2.6,0,0),0.5),Cuboid(Vector(-0,-1.5708,0),Vector(0.5,-0.8,-3),Vector(3,2.6,2))),Cuboid(Vector(-0,-1.5708,0),Vector(2.5,-0.2,-3),Vector(1,1.4,2.5)))), Union(Union(Cylinder(Vector(0,-1.5708,0),Vector(0,-1.5,-2),Vector(2,0,0),1),Union(Cylinder(Vector(0,-1.5708,0),Vector(-2,-1.5,-2),Vector(5,0,0),0.25),Union(Cylinder(Vector(0,-1.5708,0),Vector(0.5,0.5,-2),Vector(2,0,0),1),Cuboid(Vector(-0,-1.5708,0),Vector(-1,-0.8,-3.5),Vector(4,0.6,3)))),Cylinder(Vector(0,-1.5708,0),Vector(-1,-1.5,-2),Vector(4,0,0),0.6)), Union(Union(Cuboid(Vector(-0,-1.5708,0),Vector(1.5,-0.5,6.5),Vector(2.5,2,1)),Cylinder(Vector(0,0,-0),Vector(-7.5,-0.5,3),Vector(1,0,0),1),Cylinder(Vector(0,-0,0),Vector(-7.5,1.5,3),Vector(1,0,0),1)), Union(Union(Union(Cylinder(Vector(0,-0,0),Vector(-6.5,0.5,1.5),Vector(0.75,0,0),1.5),Cuboid(Vector(-0,-1.5708,0),Vector(-3.9801e-16,-1.5,6.5),Vector(3,4,1))),Cylinder(Vector(0,-0,0),Vector(-6.5,0.5,1.5),Vector(0.75,0,0),0.4),Cylinder(Vector(0,-0,0),Vector(-7.5,0.5,1.5),Vector(1,0,0),0.4)), Union(Union(Subtract(Cuboid(Vector(-0,-1.5708,0),Vector(-0.5,-2.5,-7.5),Vector(0.5,4,1)),Cylinder(Vector(0,-0,0),Vector(6,-2.5,0),Vector(2.75,0,0),1)),Intersection(Union(Cylinder(Vector(0,0,1.5708),Vector(-1,-7,0.5),Vector(3,0,0),1),Cuboid(Vector(-0,-1.5708,0),Vector(0.5,-1.5,-8),Vector(19.5,3.5,14.5))),Union(Cylinder(Vector(0,-0,0),Vector(-20,0.5,1.5),Vector(25.75,0,0),0.4),Cuboid(Vector(-0,-1.5708,0),Vector(-0.5,-1,-8),Vector(2,3,0.5)))),Cuboid(Vector(-0,-1.5708,0),Vector(-2.5,-1.5,-7.5),Vector(3,4,1))), Union(Union(Union(Union(Cylinder(Vector(0,0,-0),Vector(6.5,0,3),Vector(2.25,0,0),0.3),Cuboid(Vector(-0,-1.5708,0),Vector(1.5,-0.5,-9.25),Vector(2,2,0.5))),Union(Cuboid(Vector(-0,-1.5708,0),Vector(3,-0.5,-7.5),Vector(1,2,1)),Cylinder(Vector(0,-0,0),Vector(5.75,0.5,1.5),Vector(1.75,0,0),1.5))),Union(Cylinder(Vector(0,-0,0),Vector(5.75,0,2),Vector(3,0,0),0.3),Union(Cylinder(Vector(0,0,-0),Vector(6.5,-0.5,3),Vector(1,0,0),1),Cuboid(Vector(-0,-1.5708,0),Vector(0.5,-1.5,-7.5),Vector(2.5,4,1)))),Union(Cylinder(Vector(0,-0,0),Vector(6.5,1.5,3),Vector(1,0,0),1),Union(Cylinder(Vector(0,-0,0),Vector(6.5,1,2),Vector(2.25,0,0),0.3),Cylinder(Vector(0,0,-0),Vector(7.5,1,3),Vector(1.25,0,0),0.3)))), Union(Union(Cylinder(Vector(0,-0,0),Vector(-6,0.5,1.5),Vector(7,0,0),0.4),Cylinder(Vector(0,-0,0),Vector(-6,0.5,1.5),Vector(0.25,0,0),0.4),Cylinder(Vector(0,-0,0),Vector(-6,0.5,1.5),Vector(0.25,0,0),0.4)), Union(Union(Cylinder(Vector(0,0,-0),Vector(-7.5,0.5,-2.5),Vector(1.75,0,0),0.4),Union(Subtract(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-2.5,6.5),Vector(3.5,5,1)),Cylinder(Vector(0,-0,0),Vector(-8,-2.5,0),Vector(28,0,0),1)),Union(Cuboid(Vector(0,-1.5708,0),Vector(-2.5,-1.5,8),Vector(2,4,1)),Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-1.5,6),Vector(1,4,3)))),Cylinder(Vector(0,0,-0),Vector(-6,0.5,-2.5),Vector(0.25,0,0),0.4)), Union(Union(Subtract(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-2.5,-7.5),Vector(3,5,1)),Cylinder(Vector(0,-0,0),Vector(-20,-2.5,0),Vector(27.5,0,0),1)),Intersection(Cuboid(Vector(0,-1.5708,0),Vector(-20,-20,-7),Vector(19.5,22.5,13.5)),Cylinder(Vector(0,0,-0),Vector(-20,0.5,-2.5),Vector(26.5,0,0),0.4)),Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-1.5,-9),Vector(3,3.5,1))), Union(Union(Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,2,-9),Vector(3,8,1)),Cylinder(Vector(0,0,-0),Vector(7.5,10,-2.5),Vector(0.5,0,0),0.4),Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,-16,-8),Vector(1,26,2))), Union(Union(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-15,-9),Vector(3,1,3)),Union(Union(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-16,-8),Vector(3,1,2)),Cylinder(Vector(0,-1.5708,0),Vector(-3.5,-15,-8),Vector(1,0,0),1)),Cylinder(Vector(0,-1.5708,0),Vector(-3.5,-15,-8),Vector(3,0,0),1)),Cylinder(Vector(0,-1.5708,0),Vector(-3.5,-15,-8),Vector(1,0,0),1)), Union(Union(Subtract(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-10,6),Vector(1,8.5,2)),Cylinder(Vector(0,-1.5708,0),Vector(-3.5,-6.5,7),Vector(3,0,0),0.5)),Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-6.5,8),Vector(3,5,1)),Cylinder(Vector(0,0,-0),Vector(-9,-10,-2.5),Vector(2.5,0,0),0.4)), Union(Union(Union(Union(Cuboid(Vector(-0,-1.5708,0),Vector(-2.5,12,-8),Vector(2,1,2)),Cylinder(Vector(0,0,-0),Vector(-6,10,-2.5),Vector(12,0,0),0.4)),Cylinder(Vector(0,0,-0),Vector(6,10,-2.5),Vector(3,0,0),0.4)),Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,4.5,-8),Vector(1,8.5,2)),Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,4.5,-9),Vector(3,8.5,1))), Union(Union(Cylinder(Vector(0,0,-0),Vector(-9,10,-2.5),Vector(9.5,0,0),0.4),Cuboid(Vector(-0,-1.5708,0),Vector(-2.5,-0.2,8),Vector(2,13.2,1)),Union(Cuboid(Vector(-0,-1.5708,0),Vector(-2.5,12,6),Vector(2,1,2)),Subtract(Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,-0.2,6),Vector(1,13.2,3)),Cylinder(Vector(0,-1.5708,0),Vector(-3.5,4.5,7),Vector(1,0,0),0.5)))), Union(Union(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-16,6),Vector(3,2,2)),Subtract(Union(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-15,6),Vector(1,8.5,2)),Cylinder(Vector(0,-1.5708,0),Vector(-3.5,-15,8),Vector(3,0,0),1)),Union(Cylinder(Vector(0,-1.5708,0),Vector(-3.5,-12,7),Vector(23.5,0,0),0.5),Cylinder(Vector(0,-1.5708,0),Vector(-3.5,-6.5,7),Vector(3,0,0),0.5))),Union(Cuboid(Vector(0,-1.5708,0),Vector(-3.5,-15,8),Vector(3,8.5,1)),Cylinder(Vector(0,0,-0),Vector(-9,-10,-2.5),Vector(3,0,0),0.4))), Union(Cuboid(Vector(-0,-1.5708,0),Vector(-2.5,-14,-9),Vector(2,12.5,1)),Cylinder(Vector(0,0,-0),Vector(6,-10,-2.5),Vector(3,0,0),0.4),Union(Intersection(Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,-20,-6),Vector(23.5,17.5,12.5)),Cylinder(Vector(0,0,-0),Vector(-20,-10,-2.5),Vector(40,0,0),0.4)),Cuboid(Vector(-0,-1.5708,0),Vector(-3.5,-14,-9),Vector(1,12.5,3)))))))))))))))))))'

	expression = eval(input_string)
	# print('original primitive count is ', len(primitives))

	original = export2CSG()
	orig_expr = len(expressionToStringID)

	simpTree = simplifyTree(expression)
	simpTree2 = recurseAndSimplify(simpTree)
	expression = simpTree2

	# print(str(simpTree2))
	# IPython.embed()

	expressionToStringID.clear()
	primitives.clear()
	# print('finished simplifying the tree, final tree is:\n', str(simpTree2))
	sqrt_radius = False
	eval(str(simpTree2))
	# IPython.embed()

	output_string = export2CSG()
	filename = sys.argv[2]
	print('filename', filename)

	file = open(filename, 'w')
	file.write(output_string)
	# print(output_string)
	file.close()

	filename_original = sys.argv[3]
	print('filename_original', filename_original)
	file = open(filename_original, 'w')
	file.write(original)
	file.close()

	# print(len(primitives))
	#
	# print(orig_expr)
	# print(len(expressionToStringID))

	geometryEditorObject = toGeometryEditor(globalIdx)
	geometryEditorJSONScriptFilename = sys.argv[4]
	print('geometryEditorJSONScriptFilename', geometryEditorJSONScriptFilename)

	with open(geometryEditorJSONScriptFilename, 'w') as outfile:
		outfile.write(str(geometryEditorObject))

