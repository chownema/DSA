# EX12ListSort
# python 3.4
# sorting out numbers in a list
# taking the smallest value in a list and then swapping it with
# the first value then second  lowest and the second value in the list etc.

def sort_a(numbers):
    # prepare resources
    position_map = {}
    index_position = 0
    largest_number = 0
    smallest_number = numbers[0]
    # print initial list
    print "Sorting Number List :: " + str(numbers)
    for num in numbers:
        if largest_number < num:
            largest_number = num
        # check if current is smaller than the next
        if smallest_number > num:
            # store new value in smallest_number
            smallest_number = num

        # add number to hashmap in position_map
        position_map[num] = index_position
        index_position += 1
    # set up vars
    index_position = 1
    numbers[0] = smallest_number

    # loop to next lowest value in position_map
    while largest_number != smallest_number:
        smallest_number += 1
        print "smallest number " + str(smallest_number)
        # if found swap position in number list
        if smallest_number in position_map.keys():
            print "found"
            numbers[index_position] = smallest_number
            index_position += 1

    # print result list
    print "Sorted Number List :: " + str(numbers)

sort_a(
    [5, 4, 3, 2, 6, 20, 13, 77, 35, 17, 18]
)