const Info = () => {
  return (
    <div
      id="alert-1"
      className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div className="ml-3 text-sm font-medium">
        Your link has been updated successfully.
      </div>
    </div>
  );
};

export default Info;
