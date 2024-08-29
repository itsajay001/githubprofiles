const form = document.querySelector("#form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const value = document.querySelector("#search").value;

  async function fetchUserData(value) {
    try {
      const response = await fetch(`https://api.github.com/users/${value}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const userData = await fetchUserData(value);

  if (userData) {
    document.querySelector(".box").innerHTML = `
          <div class="card mb-3" style="width: 600px; height: 180px; background-color: #313131; color: white">
          <div class="row g-0">
            <div class="col-md-4 rounded-circle " style="width: 100px; height: 100px;">
              <img src="${userData.avatar_url}"
                class="rounded-circle m-2 " style="width: 100px; height: 100px ">
            </div>
            <div class="col-md-8">

            
              <div class="card-body">
                <h5 class="card-title">${userData.login}</h5>
                <p class="card-text" style='margin-bottom': 10px; ">
                            ${userData.bio ? userData.bio : "No bio available"}
                        </p>
                <span class="card-text" style="margin-right: 30px; ">followers : ${
                  userData.followers
                } </span>

                <span class="card-text " style="margin-right: 30px; ">following :${
                  userData.following
                }</span>

                <span class="card-text margin-right: 30px; ">Repos :${
                  userData.public_repos
                }</span>


                <p class="mt-2">
                  <span class="card-text" style="margin-right: 90px;">Twitter:${
                    userData.twitter_username
                  }</span>

                  <span class="card-text">Location :${userData.location}</span>

                </p>
              </div>
            </div>
          </div>
        </div>
        `;
  }
});
