import GuideCards from "@/components/application/guide/guideCards";
import Login from "@/components/auth/login";
const HomePage = () => {

  return (
    <div className="w-full md:w-[80%] m-5 md:mx-auto text-foreground bg-whitebg p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                {/* Cards Section */}
                <GuideCards/>
            </div>
            <div>
                {/* Login card */}
                <Login/>
            </div>
        </div>
      
    </div>
  );
};

export default HomePage;
