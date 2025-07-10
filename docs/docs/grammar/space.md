# Space

Kasane では、MySQL における Table（テーブル）に相当する概念として **Space** が存在します。  
Space 同士は論理的に完全に分離されており、互いに影響を与えることはありません。

```
AddSpace("test");
AddSpace("drone-route");

```

Space には以下のような制約があります

- 命名規則に従う必要があります。
- 同じデータベース内で重複した名称を利用することはできません。

Space は以下のコマンドで削除することができます。

```
DeleteSpace("test");
```

また、現在存在する Space を以下のような方法で確認できます。

```
ShowSpaces();
```
