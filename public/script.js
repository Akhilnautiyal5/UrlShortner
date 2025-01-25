const deleteUrl = async (shortId) => {
	const confirmDelete = confirm(
		"Are you sure you want to delete this Short URL?"
	);

	if (confirmDelete) {
		const response = await fetch(`/url/${shortId}`, {
			method: "DELETE",
		});
		if (response.ok) {
			alert("URL deleted successfully");
			location.reload();
		} else {
			alert("Error deleting URL");
		}
	}
};
