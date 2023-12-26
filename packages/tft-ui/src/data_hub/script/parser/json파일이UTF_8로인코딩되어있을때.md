```typescript
static UTF8ToKoJson = (jsonString: string) => {
FileSystem.writeFile(
`${jsonDir}/temp/temp.json`,
JSON.stringify(JSON.parse(jsonString), null, 2)
);
};
```

JSON.parse 로 object 로 만든다음 다시 stringify 하면 됨.