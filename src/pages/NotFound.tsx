import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="404 - Page Not Found | Lunexweb"
        description="The page you're looking for doesn't exist. Return to Lunexweb homepage."
        canonical={location.pathname}
        noindex={true}
      />
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-muted py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 w-4 h-4" />
                Return to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()} type="button">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
