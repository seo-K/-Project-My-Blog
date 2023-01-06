// $(document).ready(function() {
// 	$("#login").click(function() {
// 		var action = $("#form1").attr('action');
// 		var form_data = {
// 			user_id: $("#user_id").val(),
// 			user_pw: $("#user_pw").val(),
// 			is_ajax: 1
// 		};
// 		$.ajax({
// 			type: "POST",
// 			url: action,
// 			data: form_data,
// 			success: function(response) {
// 				if(response == 'success') {
// 					$("#message").html("<p style='color:green;font-weight:bold'>로그인 성공!</p>");
// 					$("#form1").slideUp('slow');
// 				}
// 				else {
// 					$("#message").html("<p style='color:red'>아이디 또는 비밀번호가 잘못되었습니다.</p>");
// 				}
// 			}
// 		});
// 		return false;
// 	});
// });

// if (data == 'loginFail') {

//   alert('로그인에 실패하였습니다.')

// } else {

//   window.location.href = 'main.jsp';

// }

// $(".input_id").focusout(function () {
//   let userId = $(".input_id").val(); // input_id에 입력되는 값

//   $.ajax({
//     url: "IdCheckService",
//     type: "post",
//     data: { userId: userId },
//     dataType: "json",
//     success: function (result) {
//       if (result == 0) {
//         $("#checkId").html("사용할 수 없는 아이디입니다.");
//         $("#checkId").attr("color", "red");
//       } else {
//         $("#checkId").html("사용할 수 있는 아이디입니다.");
//         $("#checkId").attr("color", "green");
//       }
//     },
//     error: function () {
//       alert("서버요청실패");
//     },
//   });
// });

// $(document).ready(function () {
//   $(".login-button").click(function (e) {
//     e.preventDefault();

//     let userId = $("#Email").val();
//     let userPwd = $("#Password").val();

//     $.ajax({
//       type: "POST",
//       url: "/login.html",
//       data: {
//         userId: userId,
//         userPwd: userPwd,
//       },
//       dataType: "json",
//       success: function (data) {
//         if (data.succ) alert("로그인 성공");
//         else alert("로그인 실패");
//       },
//       error: function (err) {
//         alert(err);
//       },
//     });
//   });
// });

let signUp = {
  init: function () {
    $(".sign-up-button").on("click", () => {
      // function(){} 대신 ()=>{} 를 쓴 이유 : this를 바인딩하기 위해서
      this.save();
    });
  },

  save: function () {
    // alert('user의 save함수 호출됨');
    let data = {
      username: $("#useName").val(),
      password: $("#Password").val(),
      email: $("#Email").val(),
    };

    // console.log(data);

    // ajax 호출시 default가 비동기 호출 -> 순서 상관없음
    // ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert 요청
    // ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환
    $.ajax({
      // 회원가입 수행 요청
      type: "POST",
      url: "/login",
      data: JSON.stringify(data), // http body 데이터
      contentType: "application/json; charset=utf-8", // body 데이터가 어떤 타입인지 (MIME)
      dataType: "json", // 요청을 서버로 해서 응답이 왔을 때 기본적으로 모든 것이 String(문자열), 만약 생긴게 json이라면 javascript 오브젝트로 변경
    })
      .done(function (resp) {
        // 결과가 정상이면 done 실행
        alert("회원가입이 완료되었습니다.");
        //console.log(resp);
        location.href = "/login";
      })
      .fail(function (error) {
        // 실패하면 fail 실행
        alert("회원가입이 실패하였습니다.");
        alert(JSON.stringify(error));
      });
  },
};

signUp.init();
