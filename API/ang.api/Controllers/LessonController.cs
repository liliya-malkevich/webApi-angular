using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Data;
using System.Linq;
using ang.api.DAO;

namespace ang.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonController : ControllerBase
    {
        private readonly ILessonsRepository _lessonsRepository;

        public LessonController(ILessonsRepository lessonsRepository)
        {
            _lessonsRepository = lessonsRepository;
        }

        [HttpGet]
        public IActionResult GetLessons()
        {


            try { return Ok(_lessonsRepository.GetListSchedule()); }
            catch (Exception e) { return StatusCode(500, e); }
        }

       
    }
}
