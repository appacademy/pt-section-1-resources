const testObj = {
  encrypted_path: "task_505877234268e5b1bd49eea7f818e99",
  encryption_method:
    "scrambled! original positions as base64 encoded messagepack: 3AAfGQkTCgcVARYLHhcOBQAPAwwQBAgYGwIRHRocFBINBg==",
};

function decodeMessagePackArray(base64String) {
  // Decode Base64
  const binaryData = atob(base64String);
  console.log("base64 atob", binaryData)
  const byteArray = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    byteArray[i] = binaryData.charCodeAt(i);
  }

  console.log("byteArray", byteArray)

  const arrayLength = byteArray.byteLength;

  const elements = [];
  for (let i = 3; i < arrayLength; i++) {
    const element = byteArray[i];
    elements.push(element);
  }

  return elements;
}

// const test = "3AAfGQkTCgcVARYLHhcOBQAPAwwQBAgYGwIRHRocFBINBg=="
function unscrambleDecoder(data) {
  const { encrypted_path, encryption_method } = data;

  const encrpyted = encrypted_path.slice(5);
  console.log("length of path", encrpyted.length);
  const encryptionKey = encryption_method.split(" ").pop();

  const buff = decodeMessagePackArray(encryptionKey)
  console.log(buff);
  const final = new Array(encrpyted.length);
  for (let i = 0; i < buff.length; i++) {
    const char = encrpyted[i];
    const properIndex = buff[i];
    final[properIndex] = char;
  }
  const url = `/task_${final.join("")}`;
  return url;
}

console.log(unscrambleDecoder(testObj));

