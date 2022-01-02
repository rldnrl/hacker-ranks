package a_very_big_sum

func aVeryBigSum(ar []int64) int64 {
	// Write your code here
	var result int64 = 0
	for _, v := range ar {
		result += v
	}

	return result
}
