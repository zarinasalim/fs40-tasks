const url = "https://northwind.vercel.app/api/suppliers"


const tbody = document.querySelector('#table-body');
const form = document.querySelector('#form');
const openForm = document.querySelector('#openForm');
const closeForm = document.querySelector('#closeForm');

openForm.addEventListener('click', () => {
    form.classList.remove('hidden');
});

closeForm.addEventListener('click', () => {
    form.classList.add('hidden');
});

domRender();
async function getAllData(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    finally{
        console.log('Process completed');
    }
}

async function domRender(){
    const data = await getAllData()
    data.forEach(data => {
        tbody.innerHTML += `
        <div class="grid grid-cols-6 gap-4">
        <div>${data.id}</div>
        <div>${data.companyName}</div>
        <div>${data.contactName}</div>
        <div>${data.contactTitle}</div>
        <div>${data.address.street|| 'Info is not found'}</div>
        <div><button class="bg-red-100 hover:bg-red-200 text-purple px-3 py-1 rounded">
            Edit
        </button>
        <button class="bg-yellow-300 hover:bg-yellow-600 text-purple px-3 py-1 rounded">
        Delete
        </button>
        </div> `;
  });
}
   
form.addEventListener('submit', (e) => {
    e.preventDefault();
        const {
        companyName,
        contactName,
        contactTitle,
        country,
        phone,
        street,
        city,
        region,
        postalCode
    } = form;

        const newCompany = {
        companyName: companyName.value,
        contactName : contactName.value,
        contactTitle : contactTitle.value,
        address: {
            country: country.value,
            phone: phone.value,
            street: street.value,
            city: city.value,
            region: region.value,
            postalCode: postalCode.value
        }
    }

fetch (url,{
    method : "post", 
    body: JSON.stringify(newCompany),
    headers: {
        "content-type": "application/json"
    }
})
console.log(newCompany);
