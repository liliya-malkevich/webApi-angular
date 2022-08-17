using System.Data;

namespace ang.api.DAO
{
    public interface ILessonsRepository
    {
        DataTable GetListSchedule();
    }
}
