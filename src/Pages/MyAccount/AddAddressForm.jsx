import Input from '../../Part/Utility/Input/Input'

const AddAddressForm = () => {
  return (
    <div className="max-w-md ani mx-auto p-6 border rounded-md shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-4">ADD AN ADDRESS</h2>

      <form className="space-y-4 text-xl ">
      <Input placeholder="Address 2" />
      <Input placeholder="Address 2" />
      <Input placeholder="Address 2" />
      <Input placeholder="Address 2" />
      <Input placeholder="Address 2" />

      
      

        <input
          type="text"
          placeholder="Address 2"
          className="w-full border-b border-gray-300 text-gray-500 placeholder-gray-400 py-1 focus:outline-none"
        />
      </form>
    </div>
  );
};

export default AddAddressForm;