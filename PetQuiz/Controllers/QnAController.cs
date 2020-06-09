using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
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

        [HttpGet]
        [Route("/questions")]
        public async Task<ActionResult<string>> GetQuestions()
        {
            var allQnAList = await db.Questions.ToListAsync();
            var rnd = new Random();
            var fiveQnAList = allQnAList
                .OrderBy(qna => rnd.Next())
                .Take(5)
                .ToList();
            var jsonRespons = JsonConvert.SerializeObject(fiveQnAList);

            return Ok(jsonRespons);
        }
    }
}