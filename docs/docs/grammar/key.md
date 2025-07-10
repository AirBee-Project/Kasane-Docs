# Key

Space の中に Key を追加することができます。
物理的に同じ時空間において、同じ Key の値で異なる値を入力することはできません。
時間と空間と Key を一意に定めたときに、その値はただ 1 つに定まります。

```
AddSpace("drone");

drone.addkey("safe-area",BOOLEAN);
drone.addkey("population",INT);
drone.addkey("city-name",TEXT);
```

現時点では Key は以下の 3 つの型をサポートしています。

- boolean
- int
- text

boolean は true と false
int は u64
text は制限のない文字列として扱われます

また、Key を削除することもできます。

```
drone.deletekey("city-name");
```
