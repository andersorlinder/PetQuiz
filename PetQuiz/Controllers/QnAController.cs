using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PetQuiz.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetQuiz.Controllers
{
    [ApiController]
    public class QnAController : Controller
    {
        private readonly ApplicationDbContext db;

        public QnAController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpPost]
        [Route("/getqna")]
        public async Task<ActionResult<string>> GetQuestions()
        {
            var rnd = new Random();
            var allQnA = await db.Questions.ToListAsync();
            var fiveQnA = allQnA.OrderBy(qna => rnd.Next()).Take(5).ToList();
            var jsonRespons = JsonConvert.SerializeObject(fiveQnA);

            return Ok(jsonRespons);
        }
    }
}
