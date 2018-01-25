using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Tarefas.Models;
using Tarefas.Models.ManageViewModels;
using Tarefas.Services;

namespace Tarefas.Controllers
{
    public class TarefasController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}