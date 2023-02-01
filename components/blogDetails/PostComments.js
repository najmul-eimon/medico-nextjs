
const PostComments = () => {
  return (
    <div className="max-w-[746px] mt-10 mb-6">
      <h4 className="text-2xl font-bold text-primary-text pb-8">Leave a Comment</h4>

      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 lg:gap-y-8">
          {/* <!-- name --> */}
          <div>
            <label htmlFor="name" className="block mb-1 text-base font-semibold text-primary-text">Name</label>
            <input type="text" id="name" className="outline-none border border-solid border-[#D4D7E5] rounded-lg w-full h-[52px] px-4 text-base text-primary-text"/>
          </div>

          {/* <!-- email --> */}
          <div>
            <label htmlFor="email" className="block mb-1 text-base font-semibold text-primary-text">Email</label>
            <input type="email" id="email" className="outline-none border border-solid border-[#D4D7E5] rounded-lg w-full h-[52px] px-4 text-base text-primary-text"/>
          </div>

          {/* <!-- comment --> */}
          <div className="sm:col-span-2">
            <label htmlFor="comment" className="block mb-1 text-base font-semibold text-primary-text">Comment</label>
            <textarea id="comment" className="outline-none border border-solid border-[#D4D7E5] rounded-lg w-full h-[104px] py-3 px-4 text-base text-primary-text placeholder:text-base placeholder:text-[#B4B7C9] resize-none" placeholder="Type your comment here..."></textarea>
          </div>

          {/* <!-- check --> */}
          <div className="sm:col-span-2 flex items-start md:items-center gap-2">
            <input type="checkbox" id="check" className="accent-primary text-xl mt-[5px] md:mt-0 cursor-pointer"/>
            <label htmlFor="check" className="text-[#585C7B] text-sm md:text-base cursor-pointer">Save my name and emai in this browser for the next time I comment.</label>
          </div>

          {/* <!-- submit button --> */}
          <div className="sm:col-span-2 text-center md:text-left">
            <button type="submit" className="w-fit py-2 lg:py-3 px-9 md:px-8 lg:px-12 text-white text-sm font-semibold rounded-md bg-primary shadow-[0px_10px_10px_rgba(55,214,201,0.24)] hover:bg-primary-alt hover:shadow-none">Post a Comment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PostComments;