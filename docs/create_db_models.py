# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Applicant(Base):
    """description: Stores applicant personal details."""
    __tablename__ = 'applicants'
    
    applicant_id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    phone_number = Column(String, nullable=True)

class Position(Base):
    """description: Represents available positions for applicants."""
    __tablename__ = 'positions'
    
    position_id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    department = Column(String, nullable=False)
    description = Column(String, nullable=True)

class Application(Base):
    """description: Links applicants to the positions they applied for."""
    __tablename__ = 'applications'
    
    application_id = Column(Integer, primary_key=True, autoincrement=True)
    applicant_id = Column(Integer, ForeignKey('applicants.applicant_id'), nullable=False)
    position_id = Column(Integer, ForeignKey('positions.position_id'), nullable=False)
    application_date = Column(DateTime, default=datetime.datetime.now, nullable=False)

class Interview(Base):
    """description: Stores details of interviews scheduled for applications."""
    __tablename__ = 'interviews'
    
    interview_id = Column(Integer, primary_key=True, autoincrement=True)
    application_id = Column(Integer, ForeignKey('applications.application_id'), nullable=False)
    scheduled_date = Column(DateTime, nullable=False)
    status = Column(String, nullable=False)

class Interviewer(Base):
    """description: Contains information about interviewers."""
    __tablename__ = 'interviewers'
    
    interviewer_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    department = Column(String, nullable=False)

class InterviewAssignment(Base):
    """description: Links interviewers to interviews they are assigned to."""
    __tablename__ = 'interview_assignments'
    
    assignment_id = Column(Integer, primary_key=True, autoincrement=True)
    interview_id = Column(Integer, ForeignKey('interviews.interview_id'), nullable=False)
    interviewer_id = Column(Integer, ForeignKey('interviewers.interviewer_id'), nullable=False)

class Skill(Base):
    """description: Represents skills required for positions."""
    __tablename__ = 'skills'
    
    skill_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class PositionSkill(Base):
    """description: Junction table linking positions to required skills."""
    __tablename__ = 'position_skills'
    
    position_skill_id = Column(Integer, primary_key=True, autoincrement=True)
    position_id = Column(Integer, ForeignKey('positions.position_id'), nullable=False)
    skill_id = Column(Integer, ForeignKey('skills.skill_id'), nullable=False)

class ApplicantSkill(Base):
    """description: Tracks skills associated with applicants."""
    __tablename__ = 'applicant_skills'
    
    applicant_skill_id = Column(Integer, primary_key=True, autoincrement=True)
    applicant_id = Column(Integer, ForeignKey('applicants.applicant_id'), nullable=False)
    skill_id = Column(Integer, ForeignKey('skills.skill_id'), nullable=False)

class Review(Base):
    """description: Records reviews given by interviewers for applications post-interview."""
    __tablename__ = 'reviews'
    
    review_id = Column(Integer, primary_key=True, autoincrement=True)
    application_id = Column(Integer, ForeignKey('applications.application_id'), nullable=False)
    interviewer_id = Column(Integer, ForeignKey('interviewers.interviewer_id'), nullable=False)
    score = Column(Integer, nullable=False)
    comments = Column(String, nullable=True)

class Offer(Base):
    """description: Represents job offers extended to applicants."""
    __tablename__ = 'offers'
    
    offer_id = Column(Integer, primary_key=True, autoincrement=True)
    application_id = Column(Integer, ForeignKey('applications.application_id'), nullable=False)
    offered_date = Column(DateTime, nullable=False)
    accepted = Column(String, nullable=True)  # Example values: "Yes", "No", "Pending"

class Document(Base):
    """description: Stores documents/submission files for applications."""
    __tablename__ = 'documents'
    
    document_id = Column(Integer, primary_key=True, autoincrement=True)
    application_id = Column(Integer, ForeignKey('applications.application_id'), nullable=False)
    document_type = Column(String, nullable=False)
    file_path = Column(String, nullable=False)

def insert_sample_data(session):
    # Sample Applicants
    applicants = [
        Applicant(first_name="John", last_name="Doe", email="john.doe@example.com", phone_number="555-555-1234"),
        Applicant(first_name="Mary", last_name="Smith", email="mary.smith@example.com", phone_number="555-555-9876"),
        # Add more as needed
    ]
    session.add_all(applicants)
    
    # Sample Positions
    positions = [
        Position(title="Software Engineer", department="Engineering", description="Software development"),
        Position(title="Data Scientist", department="Data Science", description="Data analysis and modeling"),
        # More positions
    ]
    session.add_all(positions)

    # Sample Applications
    applications = [
        Application(applicant_id=1, position_id=1, application_date=datetime.datetime(2023, 10, 5)),
        Application(applicant_id=2, position_id=2, application_date=datetime.datetime(2023, 10, 6)),
        # More applications
    ]
    session.add_all(applications)

    # Sample Interviews
    interviews = [
        Interview(application_id=1, scheduled_date=datetime.datetime(2023, 10, 15), status="Scheduled"),
        Interview(application_id=2, scheduled_date=datetime.datetime(2023, 10, 16), status="Completed"),
        # More interviews
    ]
    session.add_all(interviews)

    # Sample Interviewers
    interviewers = [
        Interviewer(name="Alice Johnson", department="Engineering"),
        Interviewer(name="Bob Brown", department="Data Science"),
        # More interviewers
    ]
    session.add_all(interviewers)

    # Sample Interview Assignments
    interview_assignments = [
        InterviewAssignment(interview_id=1, interviewer_id=1),
        InterviewAssignment(interview_id=2, interviewer_id=2),
        # More assignments
    ]
    session.add_all(interview_assignments)

    # Sample Skills
    skills = [
        Skill(name="Python"),
        Skill(name="Machine Learning"),
        # More skills
    ]
    session.add_all(skills)

    # Sample Position Skills
    position_skills = [
        PositionSkill(position_id=1, skill_id=1),
        PositionSkill(position_id=2, skill_id=2),
        # More position skills
    ]
    session.add_all(position_skills)

    # Sample Applicant Skills
    applicant_skills = [
        ApplicantSkill(applicant_id=1, skill_id=1),
        ApplicantSkill(applicant_id=2, skill_id=2),
        # More applicant skills
    ]
    session.add_all(applicant_skills)

    # Sample Reviews
    reviews = [
        Review(application_id=1, interviewer_id=1, score=85, comments="Good potential"),
        Review(application_id=2, interviewer_id=2, score=90, comments="Excellent skills"),
        # More reviews
    ]
    session.add_all(reviews)

    # Sample Offers
    offers = [
        Offer(application_id=1, offered_date=datetime.datetime(2023, 10, 20), accepted="Yes"),
        Offer(application_id=2, offered_date=datetime.datetime(2023, 10, 22), accepted="Pending"),
        # More offers
    ]
    session.add_all(offers)

    # Sample Documents
    documents = [
        Document(application_id=1, document_type="Resume", file_path="/path/to/resume1.pdf"),
        Document(application_id=2, document_type="Cover Letter", file_path="/path/to/coverletter1.pdf"),
        # More documents
    ]
    session.add_all(documents)

    # Commit all sample data
    session.commit()

# Create engine and bind to the session
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=False)
Session = sessionmaker(bind=engine)

# Create tables and insert sample data
Base.metadata.create_all(engine)

# Insert sample data
session = Session()
insert_sample_data(session)
