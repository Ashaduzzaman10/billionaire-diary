const loadData = async () => {
  const url = `https://forbes400.onrender.com/api/forbes400?limit=10`;
  const res = await fetch(url);
  const data = await res.json();
  displayLoadedData(data);
};

const displayLoadedData = (billionaire) => {
  const billionaireContainer = document.getElementById("Billionaire-details");
  billionaireContainer.textContent = "";

  billionaire.forEach((element) => {
    const person = document.createElement("div");
    person.classList.add("col");
    person.innerHTML = `
    <div class="col container-fluid">
          <!-- adding card  -->
          <div
            class="card mb-3 text-light"
            style="max-width: 540px; background-color: rgba(14, 27, 52, 1)"
          >
            <h1 class="text-center mt-2 mb-2">${element.personName}</h1>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                    src="${element.squareImage}"
                  class="img-fluid rounded ms-5 mb-2"
                />
                <p class="card-text fs-6 ms-3 text-info" ;">source : ${element.source}</p>
              </div>
              <div class="col-md-8">
                <div class="card-body text-center">
                  <div class="card-text">
                    <h6>Citizenship: ${element.countryOfCitizenship}</h6>
                    <h6>State: ${element.state}</h6>
                    <h6>City:  ${element.city}</h6>
                    <h6>Total Shares: ${element.financialAssets[0].numberOfShares}</h6>
                    <h6>Share Price: <span>$</span> ${element.financialAssets[0].sharePrice}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
    billionaireContainer.appendChild(person);
  });
};
loadData();
