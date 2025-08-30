import { Button } from "@/components/ui/button";
import { Shield, FileText, Calendar, Activity, Download, Lock } from "lucide-react";

const HealthRecordsSection = () => {
  const recordFeatures = [
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Access all your prescriptions and medication history in one place"
    },
    {
      icon: Activity,
      title: "Lab Reports",
      description: "View and download your test results and lab reports instantly"
    },
    {
      icon: Calendar,
      title: "Appointment History",
      description: "Track all your past and upcoming medical appointments"
    },
    {
      icon: Download,
      title: "Medical Certificates",
      description: "Download medical certificates and health documents"
    }
  ];

  return (
    <section id="health-records" className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="h-4 w-4" />
                  SECURE & PRIVATE
                </div>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground">
                  Digital Health Records
                </h2>
                <p className="font-inter text-muted-foreground text-lg">
                  Securely store and access your complete medical history anytime, anywhere. 
                  Your health data is encrypted and protected with bank-level security.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {recordFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="font-inter text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold px-8"
                >
                  <Lock className="h-5 w-5 mr-2" />
                  Access Records
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-inter font-medium px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Mock Health Record Interface */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <h3 className="font-poppins font-semibold text-xl text-foreground">
                      Health Records
                    </h3>
                    <div className="flex items-center gap-2 text-green-600">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">Secured</span>
                    </div>
                  </div>
                  
                  {/* Sample Records */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">Blood Test Report</div>
                        <div className="text-xs text-muted-foreground">Dec 15, 2024</div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">Cardiology Checkup</div>
                        <div className="text-xs text-muted-foreground">Dec 10, 2024</div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Activity className="h-5 w-5 text-purple-600" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">Prescription History</div>
                        <div className="text-xs text-muted-foreground">Dec 8, 2024</div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-medical text-white">
                    View Complete History
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthRecordsSection;