import React, { useEffect, useState } from "react";
import { useForm, router } from "@inertiajs/react";
import Dropzone from "react-dropzone";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Create = ({ categories }) => { 
  
    const { data, setData, post, processing, reset } = useForm({
        title: "",
        slug: "",
        short_description: "",
        detail_description: "",
        original_price: "",
        price: "",
        qty: "",
        status: "",
        category_id: "",
        image_array: [],
    });

    const [images, setImages] = useState([]);

    const handleDrop = (acceptedFiles) => {
        // Generate preview URLs
        const previewFiles = acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
        );
        console.log("previewFiles", previewFiles);
        
        // Store in state (for preview)
        setImages((prev) => [...prev, ...previewFiles]);

        // Store in useForm (for submission)
        setData("image_array", [...data?.image_array, ...acceptedFiles]);
    };

    const fetchSlug = (title) => {
      setData("slug", title.replace(/\s+/g, "-").toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("product.store"), {
          forceFormData: true,
            onSuccess: () => {
                toast.success("Product added successfully!");
                reset();
                setImages([]);
                router.visit(route("product.index"));
            },
            onError: (errors) => {
                Object.values(errors).forEach((msg) => toast.error(msg));
            },
        });
    };

    useEffect(() => {
      return () => images.forEach(file => URL.revokeObjectURL(file.preview));
    }, [images]);
    

    return (
        <div className="container">
            <h4 className="mb-4">Add Product</h4>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                {/* Title */}
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data?.title}
                                        onChange={(e) => {
                                            setData("title", e.target.value);
                                            fetchSlug(e.target.value);
                                        }}
                                        required
                                    />
                                </div>

                                {/* Slug */}
                                <div className="mb-3">
                                    <label className="form-label">Slug</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data?.slug}
                                        readOnly
                                    />
                                </div>

                                {/* Short Description */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Short Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data?.short_description}
                                        onChange={(e) =>
                                            setData(
                                                "short_description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>

                                {/* Detail Description */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Detail Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        value={data?.detail_description}
                                        onChange={(e) =>
                                            setData(
                                                "detail_description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>

                                {/* Dropzone */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="mb-3">Media</h5>
                                        <Dropzone
                                            onDrop={handleDrop}
                                            accept={{ "image/*": [] }}
                                        >
                                            {({
                                                getRootProps,
                                                getInputProps,
                                            }) => (
                                                <div
                                                    {...getRootProps()}
                                                    className="border p-4 text-center bg-light rounded"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <input
                                                        {...getInputProps()}
                                                    />
                                                    <p className="mb-0">
                                                        Drop files here or click
                                                        to upload.
                                                    </p>
                                                </div>
                                            )}
                                        </Dropzone>
                                    </div>
                                </div>

                                {/* Gallery */}
                                <div className="row">
                                    {images?.map((img, index) => (
                                        <div
                                            className="col-md-2 mb-3"
                                            key={index}
                                        >
                                            <div className="card">
                                                <img
                                                    src={img.preview}
                                                    className="card-img-top"
                                                    alt="Product"
                                                />
                                                <div className="card-body text-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            handleImageDelete(
                                                                img.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Price + Original Price */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Original Price
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.original_price}
                                                onChange={(e) =>
                                                    setData(
                                                        "original_price",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Price
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.price}
                                                onChange={(e) =>
                                                    setData(
                                                        "price",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.qty}
                                        onChange={(e) =>
                                            setData("qty", e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                {/* Status */}
                                <h5>Product Status</h5>
                                <div className="mb-3">
                                    <label className="form-label">Status</label>
                                    <select
                                        className="form-select"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        required
                                    >
                                        <option value="">
                                            Select option...
                                        </option>
                                        <option value="active">Active</option>
                                        <option value="inactive">
                                            Inactive
                                        </option>
                                    </select>
                                </div>

                                {/* Category */}
                                <h5>Product Category</h5>
                                <div className="mb-3">
                                    <select
                                        className="form-select"
                                        value={data.category_id}
                                        onChange={(e) =>
                                            setData(
                                                "category_id",
                                                e.target.value
                                            )
                                        }
                                        required
                                    >
                                        <option value="">
                                            Select option...
                                        </option>
                                        {categories?.map((cat) => (
                                            <option key={cat?.id} value={cat?.id}>
                                                {cat?.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-3">
                    <button
                        className="btn btn-primary"
                        type="submit"
                        // disabled={processing}
                    >
                        {processing ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                ></span>
                                Saving...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create;
