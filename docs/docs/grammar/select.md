# select

作成した Space から、任意の SpaceTimeID を選択することができます。
また、選択された ID に対して `put` や `get` メソッドを用いて、データの保存や取得を行うことが可能です。

## 基本的な使用例

**入力例：**

```
AddSpace("drone");
drone.select([5/1/3/2]);
```

**出力例：**

```
[{'5/1/3/2': []}]
```

`.select` を単独で使用した場合（後続のメソッドがない場合）、選択された SpaceTimeID がそのまま出力されます。

また、複数の SpaceTimeID をカンマ区切りで選択することも可能です。

**入力例：**

```
AddSpace("drone");
drone.select([5/1/3/2, 5/1/3/3]);
```

**出力例：**

```
[{'5/1/3/2': []}, {'5/1/3/3': []}]
```

## 論理演算による選択

`[]` に論理演算子を組み合わせることで、柔軟な ID の選択が可能です。以下は `NOT` を用いた例です。

**入力例：**

```
AddSpace("drone");
drone.select(NOT[5/1/3/2]);
```

**出力例：**

```
[{'5/2:-/4:-/3:-': []}, {'5/2:-/4:-/-:1': []}, {'5/2:-/-:2/3:-': []},
 {'5/2:-/-:2/-:1': []}, {'5/-:0/4:-/3:-': []}, {'5/-:0/4:-/-:1': []},
 {'5/-:0/-:2/3:-': []}, {'5/-:0/-:2/-:1': []}]
```

現在サポートされている演算子は以下のとおりです。

- `NOT`
- `AND`
- `OR`

演算の詳細な仕様については、演算解説ページをご参照ください。

## select.put

`.select(...).put(...)` を使用することで、選択した SpaceTimeID に Key と値のペアを追加できます。

**例：**

```
AddSpace("drone");
drone.addkey("safe-area", BOOLEAN);
drone.select([5/1/3/2]).put("safe-area", true);
```

同一の Space、同一の Key、同一の SpaceTimeID にすでに値が存在している場合、この操作はエラーになります。

## select.set

`.set(...)` は `.put(...)` とほぼ同じですが、すでに値が存在している場合でも強制的に上書きを行います。
書き込み操作を冪等に保ちたい場合や、値を更新したいときに使用します。

## select.delete

特定の Key の情報を削除するには、`.select(...).delete(...)` を使用します。

**例：**

```
AddSpace("drone");
drone.addkey("safe-area", BOOLEAN);
drone.select([5/1/3/2]).put("safe-area", true);
drone.select([5/1/3/2]).delete("safe-area");
```

指定した SpaceTimeID から、指定した Key に対応するデータのみを削除します。

## select.get

`.select(...).get(...)` を使用することで、特定の SpaceTimeID に紐づいたデータを取得できます。

**入力：**

```
AddSpace("drone");
drone.addkey("safe-area", BOOLEAN);
drone.select([5/1/3/2]).put("safe-area", true);
drone.select([5/1/3/2]).get("safe-area");
```

**出力：**

```
[{'5/1/3/2': [{"safe-area": true}]}]
```

複数の Key を同時に取得することも可能です。また、ワイルドカード（`*`）を指定すると、指定した SpaceTimeID に存在するすべての Key の情報を取得できます。
なお、指定された Key が存在しない場合は、`.select(...)` 単体と同じ形式の空データが返されます。
