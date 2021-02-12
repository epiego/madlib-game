export function sync(input, span) {
    const value = input.value;
    span.textContent = value;
    return span;
}