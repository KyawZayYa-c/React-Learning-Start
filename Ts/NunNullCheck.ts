function liveDangerously(x?: number) {
    console.log(x!.toFixed());
}
liveDangerously(123);