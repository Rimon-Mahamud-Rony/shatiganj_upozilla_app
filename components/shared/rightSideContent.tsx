export function RightSideContent() {
    return (
      <div className="w-full sm:w-3/8 flex flex-col justify-center bg-white p-6">
        <h2 className="text-3xl font-bold mb-4">Right Side Content</h2>

        <p className="text-gray-600 leading-relaxed">
          এখানে আপনার বিস্তারিত কন্টেন্ট থাকবে। মোবাইলে এটি নিচে থাকবে এবং বড়
          স্ক্রিনে ডান পাশে থাকবে।
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    );
}