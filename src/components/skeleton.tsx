import "../styles/skeleton.css";

const SkeletonCourseItem: React.FC = () => {
  return (
    <div className="courseItem skeletonCourseItem">
      <div className="skeletonImage"></div>
      <div className="courseHead">
        <div className="skeletonText short"></div>
        <div className="courseHeadBody">
          <div className="skeletonText short"></div>
          <div className="skeletonText short"></div>
        </div>
      </div>
      <div className="lineCard"></div>
      <div className="courseCta">
        <div className="skeletonText"></div>
        <div className="skeletonButton"></div>
      </div>
    </div>
  );
};

export default SkeletonCourseItem;
