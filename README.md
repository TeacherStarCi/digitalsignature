# INSTALLATION

Firstly, use can install all missing modules by using <br>
``` npm install ``` <br>
In this sample, I use 
 the built-in `crypto` module of NodeJS. 
# USAGE

Alice muốn gửi cho Bob một thông điệp
<br> `'Qua dep trai'`
<br> Bob chắc chắn sẽ nhận được thông điệp, nhưng mà Bob không chắc chắn rằng thông điệp đó có được truyền tải từ Alice hay là không.
<br>
Đây là vấn đề nghiêm trọng trong bảo mật, vì bất cứ ai có thể lợi dụng điều này để đánh lừa Bob. Ai cũng có thể giả làm Alice và yêu cầu Bob phải làm gì đó cho họ. <br>
Để tránh chuyện này, chữ kí điện tử ra đời. <br> Trước hết, Alice sẽ công khai Public Key cho mọi người, không riêng gì Bob. Bù lại, Alice phải giấu đi Private Key của mình.
<br> Bên cạnh truyền tải thông điệp, Alice sẽ gửi kèm 1 signature (chữ ký), thứ được mã hóa từ thông điệp ban đầu và Private Key của Alice. Điều này được mô tả ở hàm `sign` 

`sign(algorithm, data, privateKey) ` <br>
( tham số đầu tiên nếu ta để là `null` hoặc `undefined` thì nó sẽ dựa theo thuật toán của Private Key, nên không cần quan tâm lắm. Thực chất hàm `sign` chỉ có 2 tham số là `data` và `privateKey` )

Vì Alice gửi cả thông điệp lẫn signature nên nếu Bob chỉ nhận được thông điệp thôi thì chắc chắn nó không được gửi từ Alice. Nếu Bob nhận được cả thông điệp lẫn signature, thì Bob có thể sử dụng Public Key mà Alice đã công khai trước đó, thông điệp lẫn signature để xác minh rằng có đúng hay không. Điều này được mô tả ở hàm `verify` 

  `verify(algorithm, data, publicKey, signature)`
 <br>
( tham số đầu tiên nếu ta để là `null` hoặc `undefined` thì nó sẽ dựa theo thuật toán của Private Key, nên không cần quan tâm lắm. Thực chất hàm `verify` chỉ có 3 tham số là `data`, `publicKey` và `signature` )

  Hàm `verify` trả về `true` hoặc `false`. Nếu `true` là chắn chắn Alice gửi, còn nếu `false` thì không.
