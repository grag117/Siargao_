
const form=document.getElementById('bookingForm');
if(form){
 const params=new URLSearchParams(location.search);
 const wanted=params.get('package');
 if(wanted){const sel=document.getElementById('package');for(const o of sel.options){if(o.text.toLowerCase()===wanted.toLowerCase()){sel.value=o.value;break;}}}
 form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Siargao Trip Inquiry — '+d.get('package'));const body=encodeURIComponent(`Hello Feel and Discover Siargao,\n\nI would like to inquire about a trip.\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nPackage: ${d.get('package')}\nGuests: ${d.get('guests')}\nPreferred date: ${d.get('date')}\nDate flexibility: ${d.get('flexible')}\nRequests: ${d.get('message')||'None'}\n\nPlease confirm availability, final pricing, inclusions, and booking terms.\n\nThank you!`);location.href=`mailto:hello@feelanddiscoversiargao.example?subject=${subject}&body=${body}`;});
}
