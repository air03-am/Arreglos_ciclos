function computeSumAndProduct(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0); // Suma todos los números
    const product = arr.reduce((acc, num) => acc * num, 1); // Multiplica todos los números
    return {
        sum: sum,
        product: product
    }
}
