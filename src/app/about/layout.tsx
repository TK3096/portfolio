const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      {/* <div className='bg-indigo-500 fixed w-[30px]'>
        <a href='#mbti'>
          <p>mbti</p>
        </a>
      </div> */}
      <main className='h-full'>{children}</main>
    </div>
  )
}

export default AboutLayout
