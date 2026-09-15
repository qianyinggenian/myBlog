## 1、 java编译文件问题
### 1-1 在编译时出现编码GBK的不可映射字符，Java报错
解决办法：javac -encoding UTF-8 F.java 即可解决编码问题，其中F.java可替换为其他java文件
## 2、 java打包jar包
```
mvn clean package -DskipTests
```
## 3、 java运行jar包
```
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

## 4、map list过滤
```java
// map xx+yy形式
 Map<String,VehicleRecordNumVO> vehicleRecordNumVOMap = vehicleRecordNumVOList.stream()
                .collect(Collectors.toMap(v->v.getAppletUserId() + "-" + v.getVehiclePlate(),
                        vehicleRecordNumVO -> vehicleRecordNumVO));
// map xx形式
Map<String, MyVehicle> myVehicleMap = myVehicleList.stream().collect(Collectors.toMap(MyVehicle::getPlateNum, myVehicle -> myVehicle));


 Map<String, List<MyVehicle>> myVehicleMap = myVehicleList.stream().collect(Collectors.groupingBy(MyVehicle::getAppletUserId));
 // list过滤
List<EnterpriseCarInfo> uniqueMyVehicleList = uniqueList.stream()
                                .collect(Collectors.toMap(
                                        v -> v.getPlateNum() + "_" + v.getVehicleColor(), // 作为唯一 key
                                        v -> v,
                                        (existing, replacement) -> existing // 如果重复，保留第一个
                                ))
                                .values()
                                .stream()
                                .collect(Collectors.toList());
                                
                                
Map<String, Refund> refundMap = refundList.stream()
        .collect(Collectors.toMap(
                Refund::getOutTradeNo,
                refund -> refund,
                (existing, replacement) -> replacement // 遇到重复key时，保留新值（覆盖旧值）
        ));
                
Map<String, List<String>> planIdToEquipmentIdsMap = planEquipmentList.stream()
        .collect(Collectors.groupingBy(
                PlanEquipment::getEmergencyPlanId,
                Collectors.mapping(PlanEquipment::getElectromechanicalEquipmentId, Collectors.toList())
        ));
```
## 5、排序
```java
import java.text.Collator;
import java.util.Locale;

// 查询后手动排序
List<PersonalPerformance> result = repository.findBySectionDeptIdAndMonthAndUserIdInAndDelFlag(
    sectionDeptId, month, userIds, delFlag);

// 使用中文拼音排序
Collator collator = Collator.getInstance(Locale.CHINA);
result.sort((a, b) -> {
    int scoreCompare = Integer.compare(b.getScore(), a.getScore()); // desc
    if (scoreCompare != 0) return scoreCompare;
    return collator.compare(a.getUserName(), b.getUserName()); // 拼音升序
});
```
