package plus_minus

import "fmt"

func plusMinus(arr []int32) {
	// Write your code here
	var positive float64 = 0
	var negative float64 = 0
	var zero float64 = 0

	var SIZE float64 = 0

	for _, element := range arr {
		if element > 0 {
			positive++
		} else if element < 0 {
			negative++
		} else {
			zero++
		}
		SIZE++
	}

	var positiveRatio float64 = positive / SIZE
	var negativeRatio float64 = negative / SIZE
	var zeroRatio float64 = zero / SIZE

	fmt.Println(positiveRatio)
	fmt.Println(negativeRatio)
	fmt.Println(zeroRatio)
}
