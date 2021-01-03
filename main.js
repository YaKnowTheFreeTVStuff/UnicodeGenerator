for(let i = 0; i < 1114111; i++){
eval("require(\"fs\").appendFileSync(\"chars.txt\", \"" + "\\u\{" + (new Number(i)).toString(16) + "\}\");")
}