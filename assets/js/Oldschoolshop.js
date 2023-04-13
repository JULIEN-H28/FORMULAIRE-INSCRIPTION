function getData() {
    fetch("https://afpatraining.snage.tech/login")

    api key : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg2NjksImV4cCI6MTY3OTQ3ODcyOX0.mIqZ3Psdtolnn72tjFu_J2iRUMoPeu_TT0N7TI44gMQ
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json.data);
        const html = json.data
          .map(function(item) {
            return "<p>" + item.first_name + " " + item.last_name + "</p>";
          })
          .join("");
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  getData();
  