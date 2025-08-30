import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

const Create = ({ category, slugRoute }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        id: category?.id || "",
        name: category?.name || "",
        slug: category?.slug || "",
        status: category?.status || "",
        show_on_home: category?.showOnHome || "",
    });

    // Auto-generate slug when name changes
    // useEffect(() => {
    //     if (data.name.trim() !== "") {
    //         fetch(`${slugRoute}?title=${encodeURIComponent(data.name)}`)
    //             .then((res) => res.json())
    //             .then((response) => {
    //                 if (response.status === true) {
    //                     setData("slug", response.slug);
    //                 }
    //             })
    //             .catch((err) => console.error("Slug generation error", err));
    //     }
    // }, [data.name]);

    useEffect(() => {
        if (data?.name.trim() !== "") {
            setData("slug", data?.name.replace(/\s+/g, "-").toLowerCase());
        }
    }, [data?.name]);

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("categories.store"), {
            onSuccess: () => {
                toast.success("Category saved successfully!");
            },
            onError: (errors) => {
                toast.error("Please check the form and try again.");
                console.error(errors);
            },
        });
    };

    return (
        <div className="container my-4">
            <div className="card shadow">
                <div className="card-body">
                    <h4 className="card-title mb-4">Add Category</h4>

                    <form onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className={`form-control ${
                                    errors.name ? "is-invalid" : ""
                                }`}
                                placeholder="Category Name"
                                required
                            />
                            {errors.name && (
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        {/* Slug */}
                        <div className="mb-3">
                            <label className="form-label">Slug</label>
                            <input
                                type="text"
                                value={data.slug}
                                readOnly
                                className="form-control bg-light"
                            />
                        </div>

                        {/* Status */}
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className={`form-select ${
                                    errors.status ? "is-invalid" : ""
                                }`}
                                required
                            >
                                <option value="">Select option...</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            {errors.status && (
                                <div className="invalid-feedback">
                                    {errors.status}
                                </div>
                            )}
                        </div>

                        {/* Show on Home */}
                        <div className="mb-3">
                            <label className="form-label">Show on Home</label>
                            <select
                                value={data.show_on_home}
                                onChange={(e) =>
                                    setData("show_on_home", e.target.value)
                                }
                                className="form-select"
                                required
                            >
                                <option value="">Select option...</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary"
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;
