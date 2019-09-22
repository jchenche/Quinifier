#!/usr/bin/env python3
import sys

# data = []
# while True:
#     try:
#         line = input()
#     except:
#         break
#     else:
#         data.append(line)

data = sys.stdin

data = list(data)
if len(data) > 0 and data[-1] != '\n':
    data += '\n'
data = ''.join(data)
print(data, end='')

# data_list = list(data)
# for i in range(len(data_list)):
#     if data_list[i] == '\n':
#         data_list[i] = '\\n'
#     if data_list[i] == '\\':
#         data_list[i] = '\\\\'
#     if data_list[i] == '\'':
#         data_list[i] = '\\\''
#     if data_list[i] == '{':
#         data_list[i] = '{{'
#     if data_list[i] == '}':
#         data_list[i] = '}}'
# data = ''.join(data_list)
# escape_curly = "{0}"

# print('''s = r\'\'\'print('{0}s = r\\'\\'\\'{1}\\'\\'\\'\\n{1}'.format(s))\'\'\'\n'''.format(data, escape_curly), end='')
# print('''print('{0}s = r\\'\\'\\'{1}\\'\\'\\'\\n{1}'.format(s))'''.format(data, escape_curly), end='')