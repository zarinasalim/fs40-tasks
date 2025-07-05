const url = "https://northwind.vercel.app/api/suppliers"


const tbody = document.querySelector('#table-body');
const modal = document.querySelector('#modal');
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
openModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
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
        <div><button class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Edit
        </button>
        <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
        Delete
        </button>
        </div> `;
  });
}
   
