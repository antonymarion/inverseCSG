#!/usr/bin/env python

import sys
import math

expressionToStringID = {}


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


class Expression:

	def __init__(self):
		expressionToStringID[self] = 'node' + str(len(expressionToStringID))
		pass

	def export2CSG(self):
		pass


def radians_to_degrees(t):
	return t / math.pi * 180


'''
Cuboid {
                pmin 0 0.43 0
                size 0.1 0.4 0.1
            }
'''


class Cuboid(Expression):
	def __init__(self, euler_angles, min_point, side):
		Expression.__init__(self)

		if side.x < 0.0:
			side.x = 0.0
		if side.y < 0.0:
			side.y = 0.0
		if side.z < 0.0:
			side.z = 0.0

		self.min_point = min_point
		self.side = side
		self.euler_angles = euler_angles

	def __str__(self):
		return ''.join(['Cuboid(', str(self.euler_angles), ', ', str(self.min_point), ', ', str(self.side), ')'])

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
		lines.append(''.join(['\t\t\t', 'pmin ', str(self.min_point.x), ' ', str(self.min_point.y), ' ', str(self.min_point.z), '\n']))
		lines.append(''.join(['\t\t\t', 'size ', str(self.side.x), ' ', str(self.side.y), ' ', str(self.side.z), '\n']))
		lines.append('\t\t}\n')
		lines.append('\t}\n')
		lines.append('}\n')

		return lines


class Cylinder(Expression):
	def __init__(self, euler_angles, min_point, side, radius):
		Expression.__init__(self)

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

	def __str__(self):
		return ''.join(['Cylinder(', str(self.euler_angles), ', ', str(self.min_point), ', ', str(self.side), ', ',
		                str(self.radius), ')'])

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


class Sphere(Expression):

	def __init__(self, center, radius):
		Expression.__init__(self)
		self.center = center
		if radius < 0:
			self.radius = 0.0
		else:
			self.radius = math.sqrt(radius)

	def __str__(self):
		return ''.join(['Sphere(', str(self.center), ',', str(self.radius), ')'])

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

	def __init__(self, e1, e2):
		Expression.__init__(self)
		self.e1 = e1
		self.e2 = e2

	def __str__(self):
		return ''.join(['Intersection(', str(self.e1), ',', str(self.e2), ')'])

	def export2CSG(self):
		lines = []
		lines.append(expressionToStringID[self] + ' {\n')
		lines.append('\tType internal\n')
		lines.append('\tOperator intersect\n')
		lines.append('\tnumChildren 2\n')
		lines.append(''.join(['\tChild ', expressionToStringID[self.e1], ' ', expressionToStringID[self.e2], '\n']))
		lines.append('}\n')
		return lines


class Subtract(Expression):

	def __init__(self, e1, e2):
		Expression.__init__(self)
		self.e1 = e1
		self.e2 = e2

	def __str__(self):
		return ''.join(['Subtract(', str(self.e1), ',', str(self.e2), ')'])

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


# Usage:
# Arg 1 = input string
# Arg 2 = output filename
if __name__ == "__main__":
	input_string = sys.argv[1]
	print("input string: %s" % input_string)
	expression = eval(input_string)
	filename = input_string = sys.argv[2]
	print("output string: %s" % input_string)
	file = open(filename, 'w')
	output_string = export2CSG()
	file.write(output_string)
	print
	output_string
	file.close()
