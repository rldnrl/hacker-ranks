function balancedBracket(s: string): string {
  const stack = [];

  const bracketMap = new Map<string, string>();

  bracketMap.set(")", "(");
  bracketMap.set("}", "{");
  bracketMap.set("]", "[");

  for (let i = 0; i < s.length; i++) {
    if (!bracketMap.has(s[i])) {
      stack.push(s[i]);
    } else if (stack.length === 0 || bracketMap.get(s[i]) !== stack.pop()) {
      return "NO";
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}
