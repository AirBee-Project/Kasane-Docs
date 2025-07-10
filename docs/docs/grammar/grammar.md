# 大文字小文字の区別

全てのシステムの予約語は大文字と小文字を区別しません。

```
AddSpace("test");
```

```
addspace("test");
```

```
ADDSPACE("test");
```

は全て同じ意味です。

また、Key の持つ型についても

```
drone-route.addkey("safe-area",BOOLEAN);
```

```
drone-route.addkey("safe-area",boolean);
```

は同じ意味です。

# クエリ

```
drone-route.addkey("safe-area",boolean);
```

のような文字列はクエリと呼ばれます。これは Kasane の命令の最小単位です。
全てのクエリの最後には必ず`;`がつきます。
