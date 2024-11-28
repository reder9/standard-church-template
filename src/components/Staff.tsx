import React, { useEffect, useState } from "react";
import churchConfig from "../config/churchConfig.json";
import { downloadData } from "aws-amplify/storage";
import "./Staff.css";
import HelmetLayout from "./Helmet";

interface StaffMember {
  name: string;
  title: string;
  about?: string;
  picture?: string;
}

const StaffPage: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const fileName = `churches/${churchConfig.churchId}/staff.json`;
        const downloadResult = await downloadData({ path: fileName }).result;
        const text = await downloadResult.body.text();
        setStaff(JSON.parse(text));
      } catch (err) {
        console.error("Error fetching staff data:", err);
        setError("Failed to load staff information. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (isLoading) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-3">Loading staff members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center my-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <HelmetLayout title="Staff">
      <div className="container my-5">
        <header className="text-center mb-5">
          <h1 className="display-4">Meet Our Team</h1>
          <p className="lead">
            Get to know the amazing team serving at {churchConfig.churchName}.
          </p>
        </header>

        <div className="row gy-5">
          {staff.map((member, index) => (
            <div
              key={index}
              className="staff-card mb-4 shadow-sm"
            >
              <div
                className={`staff-card-row ${
                  index % 2 === 0 ? "" : "reverse"
                }`}
              >
                {/* Image Section */}
                {member.picture && (
                  <div className="image-section text-center mb-3 mb-md-0">
                    <img
                      src={member.picture}
                      alt={member.name}
                      className="img-fluid"
                    />
                  </div>
                )}

                {/* Text Section */}
                <div className="text-section">
                  <p>
                    <span className="label">Name:</span>
                    <span className="info">{member.name}</span>
                  </p>
                  <p>
                    <span className="label">Title:</span>
                    <span className="info">{member.title}</span>
                  </p>
                  {member.about && (
                    <p>
                      <span className="label">About:</span>
                      <span className="info">{member.about}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetLayout>
  );
};

export default StaffPage;
