# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 17, 2024 21:22:25
# Database: sqlite:////tmp/tmp.1J3DeYHD85/Test_project/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Applicant(SAFRSBaseX, Base):
    """
    description: Stores applicant personal details.
    """
    __tablename__ = 'applicants'
    _s_collection_name = 'Applicant'  # type: ignore
    __bind_key__ = 'None'

    applicant_id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    phone_number = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ApplicantSkillList : Mapped[List["ApplicantSkill"]] = relationship(back_populates="applicant")
    ApplicationList : Mapped[List["Application"]] = relationship(back_populates="applicant")



class Interviewer(SAFRSBaseX, Base):
    """
    description: Contains information about interviewers.
    """
    __tablename__ = 'interviewers'
    _s_collection_name = 'Interviewer'  # type: ignore
    __bind_key__ = 'None'

    interviewer_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    department = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="interviewer")
    InterviewAssignmentList : Mapped[List["InterviewAssignment"]] = relationship(back_populates="interviewer")



class Position(SAFRSBaseX, Base):
    """
    description: Represents available positions for applicants.
    """
    __tablename__ = 'positions'
    _s_collection_name = 'Position'  # type: ignore
    __bind_key__ = 'None'

    position_id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    department = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ApplicationList : Mapped[List["Application"]] = relationship(back_populates="position")
    PositionSkillList : Mapped[List["PositionSkill"]] = relationship(back_populates="position")



class Skill(SAFRSBaseX, Base):
    """
    description: Represents skills required for positions.
    """
    __tablename__ = 'skills'
    _s_collection_name = 'Skill'  # type: ignore
    __bind_key__ = 'None'

    skill_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ApplicantSkillList : Mapped[List["ApplicantSkill"]] = relationship(back_populates="skill")
    PositionSkillList : Mapped[List["PositionSkill"]] = relationship(back_populates="skill")



class ApplicantSkill(SAFRSBaseX, Base):
    """
    description: Tracks skills associated with applicants.
    """
    __tablename__ = 'applicant_skills'
    _s_collection_name = 'ApplicantSkill'  # type: ignore
    __bind_key__ = 'None'

    applicant_skill_id = Column(Integer, primary_key=True)
    applicant_id = Column(ForeignKey('applicants.applicant_id'), nullable=False)
    skill_id = Column(ForeignKey('skills.skill_id'), nullable=False)

    # parent relationships (access parent)
    applicant : Mapped["Applicant"] = relationship(back_populates=("ApplicantSkillList"))
    skill : Mapped["Skill"] = relationship(back_populates=("ApplicantSkillList"))

    # child relationships (access children)



class Application(SAFRSBaseX, Base):
    """
    description: Links applicants to the positions they applied for.
    """
    __tablename__ = 'applications'
    _s_collection_name = 'Application'  # type: ignore
    __bind_key__ = 'None'

    application_id = Column(Integer, primary_key=True)
    applicant_id = Column(ForeignKey('applicants.applicant_id'), nullable=False)
    position_id = Column(ForeignKey('positions.position_id'), nullable=False)
    application_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    applicant : Mapped["Applicant"] = relationship(back_populates=("ApplicationList"))
    position : Mapped["Position"] = relationship(back_populates=("ApplicationList"))

    # child relationships (access children)
    DocumentList : Mapped[List["Document"]] = relationship(back_populates="application")
    InterviewList : Mapped[List["Interview"]] = relationship(back_populates="application")
    OfferList : Mapped[List["Offer"]] = relationship(back_populates="application")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="application")



class PositionSkill(SAFRSBaseX, Base):
    """
    description: Junction table linking positions to required skills.
    """
    __tablename__ = 'position_skills'
    _s_collection_name = 'PositionSkill'  # type: ignore
    __bind_key__ = 'None'

    position_skill_id = Column(Integer, primary_key=True)
    position_id = Column(ForeignKey('positions.position_id'), nullable=False)
    skill_id = Column(ForeignKey('skills.skill_id'), nullable=False)

    # parent relationships (access parent)
    position : Mapped["Position"] = relationship(back_populates=("PositionSkillList"))
    skill : Mapped["Skill"] = relationship(back_populates=("PositionSkillList"))

    # child relationships (access children)



class Document(SAFRSBaseX, Base):
    """
    description: Stores documents/submission files for applications.
    """
    __tablename__ = 'documents'
    _s_collection_name = 'Document'  # type: ignore
    __bind_key__ = 'None'

    document_id = Column(Integer, primary_key=True)
    application_id = Column(ForeignKey('applications.application_id'), nullable=False)
    document_type = Column(String, nullable=False)
    file_path = Column(String, nullable=False)

    # parent relationships (access parent)
    application : Mapped["Application"] = relationship(back_populates=("DocumentList"))

    # child relationships (access children)



class Interview(SAFRSBaseX, Base):
    """
    description: Stores details of interviews scheduled for applications.
    """
    __tablename__ = 'interviews'
    _s_collection_name = 'Interview'  # type: ignore
    __bind_key__ = 'None'

    interview_id = Column(Integer, primary_key=True)
    application_id = Column(ForeignKey('applications.application_id'), nullable=False)
    scheduled_date = Column(DateTime, nullable=False)
    status = Column(String, nullable=False)

    # parent relationships (access parent)
    application : Mapped["Application"] = relationship(back_populates=("InterviewList"))

    # child relationships (access children)
    InterviewAssignmentList : Mapped[List["InterviewAssignment"]] = relationship(back_populates="interview")



class Offer(SAFRSBaseX, Base):
    """
    description: Represents job offers extended to applicants.
    """
    __tablename__ = 'offers'
    _s_collection_name = 'Offer'  # type: ignore
    __bind_key__ = 'None'

    offer_id = Column(Integer, primary_key=True)
    application_id = Column(ForeignKey('applications.application_id'), nullable=False)
    offered_date = Column(DateTime, nullable=False)
    accepted = Column(String)

    # parent relationships (access parent)
    application : Mapped["Application"] = relationship(back_populates=("OfferList"))

    # child relationships (access children)



class Review(SAFRSBaseX, Base):
    """
    description: Records reviews given by interviewers for applications post-interview.
    """
    __tablename__ = 'reviews'
    _s_collection_name = 'Review'  # type: ignore
    __bind_key__ = 'None'

    review_id = Column(Integer, primary_key=True)
    application_id = Column(ForeignKey('applications.application_id'), nullable=False)
    interviewer_id = Column(ForeignKey('interviewers.interviewer_id'), nullable=False)
    score = Column(Integer, nullable=False)
    comments = Column(String)

    # parent relationships (access parent)
    application : Mapped["Application"] = relationship(back_populates=("ReviewList"))
    interviewer : Mapped["Interviewer"] = relationship(back_populates=("ReviewList"))

    # child relationships (access children)



class InterviewAssignment(SAFRSBaseX, Base):
    """
    description: Links interviewers to interviews they are assigned to.
    """
    __tablename__ = 'interview_assignments'
    _s_collection_name = 'InterviewAssignment'  # type: ignore
    __bind_key__ = 'None'

    assignment_id = Column(Integer, primary_key=True)
    interview_id = Column(ForeignKey('interviews.interview_id'), nullable=False)
    interviewer_id = Column(ForeignKey('interviewers.interviewer_id'), nullable=False)

    # parent relationships (access parent)
    interview : Mapped["Interview"] = relationship(back_populates=("InterviewAssignmentList"))
    interviewer : Mapped["Interviewer"] = relationship(back_populates=("InterviewAssignmentList"))

    # child relationships (access children)
