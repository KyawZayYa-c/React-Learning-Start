'use client'

// ၁။ Child Component (လက်ခံမည့်သူ)
// props ဆိုတဲ့ object ထဲမှာ Parent ပေးလိုက်တဲ့ data တွေ ပါလာပါတယ်
const ChildComponent = (props) => {
  return (
    <div style={{ border: '2px solid gray', padding: '10px', marginTop: '10px' }}>
      <h4>ဤသည်မှာ Child Component ဖြစ်သည်</h4>
      <p>Parent ပေးလိုက်သော နာမည်: <b>{props.name}</b></p>
      <p>Parent သတ်မှတ်ပေးသော အရောင်: <span style={{ color: props.favoriteColor }}>{props.favoriteColor}</span></p>
    </div>
  );
};

// ၂။ Parent Component (ပေးပို့မည့်သူ)
export default  function  ParentToChild(){
  const userName = "Aung Aung";
  const userColor = "blue";

  return (
    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>ဤသည်မှာ Parent Component ဖြစ်သည်</h2>

      {/* Child ကို ခေါ်သုံးပြီး props များ လှမ်းပေးခြင်း */}
      <ChildComponent name={userName} favoriteColor={userColor} />

      {/* နောက်တစ်ခါ ထပ်သုံးပြီး data အသစ် ထပ်ပေးလို့ရသည် */}
      <ChildComponent name="Su Su" favoriteColor="red" />
    </div>
  );
};