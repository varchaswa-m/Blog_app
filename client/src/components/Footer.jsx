

const Footer = () => {
  return (
    <>
<div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text-white gap-2">
         <p>Featured Blogs</p>
         <p>Most viewed</p>
         <p>Readers Choice</p>
       </div>

       <div className="flex flex-col text-white gap-2">
         <p>Forum</p>
         <p>Support</p>
         <p>Recent Posts</p>
       </div>

       <div className="flex flex-col text-white gap-2">
         <p>Privacy Policy</p>
         <p>About Us</p>
         <p>Terms & Conditions</p>
       </div>
    </div>
    <p className="py-4 padding-bottom: 100px pb-6 text-center text-white bg-black text-sm font-bold">Code by Varchaswa</p>
    </>
    
  )
}

export default Footer