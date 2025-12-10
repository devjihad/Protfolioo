function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea rows="5" placeholder="Message" className="w-full p-3 border rounded-lg"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  );
}
export default Contact 