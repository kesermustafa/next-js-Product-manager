import SubmitButton from "@/app/components/common/SubmitButton";
import CancelButton from "@/app/components/common/CancelButton";

const NewProductForm = () => {

    return (
        <div className={"max-w-[600px] w-full h-full mx-auto"}>

            <form  className="space-y-4">
                <input type="hidden" name="id"  />

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        name="title"
                        type="text"
                        className={`w-full border rounded-md px-3 py-2`}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        name="description"
                        rows={3}
                        className={`w-full border rounded-md px-3 py-2 `}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Price</label>
                    <input
                        name="price"
                        type="number"
                        className={`w-full border rounded-md px-3 py-2 `}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                        name="category"
                        className={`w-full border rounded-md px-3 py-2 `}
                    >
                        <option value="">Select</option>
                        <option value="Home">Home</option>
                        <option value="Computers">Computers</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Kids">Kids</option>
                        <option value="Grocery">Grocery</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Image</label>
                    <input
                        name="image"
                        type="text"
                        className={`w-full border rounded-md px-3 py-2 `}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <SubmitButton title="Creacte Product" />
                    <CancelButton />
                </div>
            </form>
        </div>
    );
};

export default NewProductForm;
