import React, { useEffect, useState } from "react";
import churchConfig from "../config/churchConfig.json";
import { downloadData } from 'aws-amplify/storage';

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
        try {
            const fileName = `churches/${churchConfig.churchId}/staff.json`;
            const downloadResult = await downloadData({ 
              path: fileName,
              // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
            }).result;
            const text = await downloadResult.body.text();
            // Alternatively, you can use `downloadResult.body.blob()`
            // or `downloadResult.body.json()` get read body in Blob or JSON format.
            console.log('Succeed: ', text);
            setStaff(JSON.parse(text));

          } catch (error) {
            console.log('Error : ', error);
          }
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
    return <div className="staff-container">Loading staff members...</div>;
  }

  if (error) {
    return <div className="staff-container">{error}</div>;
  }

  return (
    <div className="staff-container">
      <section className="staff-header">
        <h1 className="staff-title">Meet Our Team</h1>
        <p className="staff-subtitle">
          Get to know the amazing team serving at {churchConfig.churchName}.
        </p>
      </section>

      <section className="staff-list">
        {staff.map((member, index) => (
          <div key={index} className="staff-card">
            {member.picture && (
              <div className="staff-image-wrapper">
                <img
                  src={member.picture}
                  alt={member.name}
                  className="staff-image"
                />
              </div>
            )}
            <div className="staff-details">
              <h3 className="staff-name">{member.name}</h3>
              <p className="staff-title">{member.title}</p>
              {member.about && <p className="staff-about">{member.about}</p>}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StaffPage;
