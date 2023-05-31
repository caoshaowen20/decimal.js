## 示例1 加法

```javascript

x = 0.1 + 0.2                           // 0.30000000000000004
y = +new Decimal(0.1).add(0.2)          // 0.3
```

## 示例2 减法
```javascript

x = 0.3 - 0.1                           // 0.19999999999999998
y = +new Decimal(0.3).subtract(0.1)     // 0.2
```

## 示例3 乘法
```javascript

x = 18.99 * 100                          // 1898.9999999999998
y = +new Decimal(18.99).multiply(100)    // 1899
```

## 示例4 除法
```javascript

x = 0.3/0.1                               // 2.9999999999999996
y = +new Decimal(0.3).divide(0.1)        // 3
```
## 示例5

```javascript

x = (0.1+0.2-0.1)*100/5                                                     // 4.000000000000001
y = +new Decimal(0.1).add(0.2).subtract(0.1).multiply(100).divide(5)       // 4
```
## 示例6
```javascript

var x = new Decimal(0.1)   
var y = new Decimal(0.2).add(x);  //0.3
var z = new Decimal(0.7).add(y) // 1
```
