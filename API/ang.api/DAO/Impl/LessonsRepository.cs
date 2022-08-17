using System;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Linq;
using ang.api.DAO.Config;


namespace ang.api.DAO.Impl
{
    public class LessonsRepository : ILessonsRepository
    {
        private readonly DBRepository _repository;
        public LessonsRepository(DBRepository repository)
        {
            _repository = repository;
        }

        public DataTable GetListSchedule()
        {
            DataTable table = _repository.ExecuteProc("[sch].[ScheduleList]");
            return table;
        }
    }
}
